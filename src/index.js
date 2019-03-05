import KeenTracking from "keen-tracking";

function install(Vue, options) {
  const KeenHelpers = KeenTracking.helpers;
  const Keen = new KeenTracking(options);

  if (options.debug) {
    KeenTracking.debug = true;
  }

  if (options.autoTracking) {
    Keen.initAutoTracking(options.autoTracking);
  }

  if (options.vuex && options.vuex.mutations) {
    options.vuex.instance.subscribe((mutation, _) => {
      Keen.recordEvent(mutation.type);
    });
  }

  if (options.vuex && options.vuex.actions) {
    options.vuex.instance.subscribeAction((action, _) => {
      Keen.recordEvent(action.type);
    });
  }

  Keen.extendEvents(() => {
    return {
      page: {
        title: document.title,
        url: document.location.href,
        info: {
          /* Enriched */
        }
      },
      referrer: {
        url: document.referrer,
        info: {
          /* Enriched */
        }
      },
      tech: {
        browser: KeenHelpers.getBrowserProfile(),
        user_agent: "${keen.user_agent}",
        info: {
          /* Enriched */
        }
      },
      time: KeenHelpers.getDatetimeIndex(),
      keen: {
        addons: [
          {
            name: "keen:ua_parser",
            input: {
              ua_string: "tech.user_agent"
            },
            output: "tech.info"
          },
          {
            name: "keen:url_parser",
            input: {
              url: "page.url"
            },
            output: "page.info"
          },
          {
            name: "keen:referrer_parser",
            input: {
              referrer_url: "referrer.url",
              page_url: "page.url"
            },
            output: "referrer.info"
          }
        ]
      }
    };
  });

  Vue.prototype.$keen = Keen;
}

export default { install };
