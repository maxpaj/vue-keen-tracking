import KeenTracking from "keen-tracking";

function install(Vue, options) {
  const KeenHelpers = KeenTracking.helpers;
  const Keen = new KeenTracking({
    projectId: options.projectId,
    writeKey: options.writeKey
  });

  if (options.debug) {
    KeenTracking.debug = true;
  }

  if (options.autoTracking) {
    Keen.initAutoTracking(options.autoTracking);
  }

  if (options.trackRoutes) {
    if (typeof options.trackRoutes === "object") {
      if (options.trackRoutes.onRouteChange) {
        options.trackRoutes.router.afterEach(to => {
          Keen.recordEvent(options.router(to));
        });
      } else {
        options.trackRoutes.router.afterEach(to => {
          Keen.recordEvent(`Navigate to ${to.name || to.path}`);
        });
      }
    } else {
      throw "Router configuration invalid";
    }
  }

  if (options.trackVuex && options.trackVuex.mutations) {
    options.trackVuex.store.subscribe(mutation => {
      Keen.recordEvent(mutation.type);
    });
  }

  if (options.trackVuex && options.trackVuex.actions) {
    options.trackVuex.store.subscribeAction(action => {
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
