Template.calendar.events({
  'click #newEvent' (e, t) {
    Router.go('newEvent')
  }
})

Template.calendar.helpers({
  calendarOptions() {
    var now = new Date,
      d1 = now.setHours(12),
      d2 = now.setHours(13.5)

    return _.extend(calDefaults, {events: Events.find().fetch()})
  }
})

var calDefaults = {
  defaultView: "agendaWeek",
  header: {
    left: "",
    center: "",
    right: "today prev,next"
  },
  views: {
    agenda: {
      minTime: "12:00:00",
      //maxTime: "20:00:00"
    }
  },
  aspectRatio: .66,
  allDaySlot: false
}
