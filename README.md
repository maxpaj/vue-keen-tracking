# vue-keen-tracking

Vue plugin for Keen.io integration.

## Install

```
import VueKeen from "vue-keen-tracking";

Vue.use(VueKeen, {
  projectId: "<KEEN_PROJECT_ID>",
  writeKey: "<KEEN_WRITE_KEY>"
});
```

You can then access the KeenTracking object through `this.$keen` in any of your components/views.

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
