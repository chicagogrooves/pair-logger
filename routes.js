Router.configure({
  layoutTemplate: "layout"
});

Router.route("calendar", {
  path: "/",
  data: function () {
    return [];
  }
});

Router.route("newEvent", {
  path: "/new"
});
