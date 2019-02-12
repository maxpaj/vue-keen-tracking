![npm badge](https://img.shields.io/npm/v/vue-keen-tracking.svg?style=flat)

Vue plugin built on [keen-tracking.js](https://github.com/keen/keen-tracking.js).

## Install

```
import VueKeen from "vue-keen-tracking";

const keenOptions = {
  projectId: "<KEEN_PROJECT_ID>",
  writeKey: "<KEEN_WRITE_KEY>"
};

Vue.use(VueKeen, keenOptions);
```

You can then access the KeenTracking object through `this.$keen` in any of your components/views.

## Use

### Extend event properties

[API reference](https://github.com/keen/keen-tracking.js/blob/master/docs/extend-events.md)

```
const user = await fetchUser();
this.$keen.extendEvents({
  user
})
```

### Record an event

[API reference](https://github.com/keen/keen-tracking.js/blob/master/docs/record-events.md)

```
this.$keen.recordEvent("purchases", {
  item: "avocado"
});
```
