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

### Extend event propertiers

```
const user = await fetchUser();
this.$keen.extendEvents({
  user
})
```

### Track an event

```
this.$keen.recordEvent("Logged in");
```
