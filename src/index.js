import KeenTracking from "keen-tracking";

function install(Vue, options) {
  const KeenHelpers = KeenTracking.helpers;
  const Keen = new KeenTracking(options);

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
