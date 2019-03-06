![npm badge](https://img.shields.io/npm/v/vue-keen-tracking.svg?style=flat)

Vue plugin built on [keen-tracking.js](https://github.com/keen/keen-tracking.js).

## Install

```
npm install vue-keen-tracking --save
```

```
import VueKeen from "vue-keen-tracking";

const options = {
  projectId: "<KEEN_PROJECT_ID>",
  writeKey: "<KEEN_WRITE_KEY>"
};

Vue.use(VueKeen, options);
```

You can then access the KeenTracking object through `this.$keen` in any of your components/views.

### Auto tracking

You can add `autoTracking: { ... }` to configure Keens [auto-tracking](https://github.com/keen/keen-tracking.js/blob/master/docs/auto-tracking.md).

```
const options = {
  projectId: "<KEEN_PROJECT_ID>",
  writeKey: "<KEEN_WRITE_KEY>",
  autoTracking: { 
    recordPageViews: true,
    ...
  }
};
```

### Vue-Router and Vuex

To track events from `vue-router` or `vuex`, extend your config with this:

```
import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.use(VueRouter);

const router = require("./router");
const store = require("./store");

const options = {
  projectId: "<KEEN_PROJECT_ID>",
  writeKey: "<KEEN_WRITE_KEY>",
  trackRoutes: {
    router: router
  },
  trackVuex: {
    store: store,
    mutations: true,
    actions: true
  }
};
```

### Extend event properties

[API reference](https://github.com/keen/keen-tracking.js/blob/master/docs/extend-events.md)

```
const user = await fetchUser();
this.$keen.extendEvents({ user })
```

### Record an event

[API reference](https://github.com/keen/keen-tracking.js/blob/master/docs/record-events.md)

```
this.$keen.recordEvent("purchases", {
  item: "avocado"
});
```
