Template.tripList.helpers({
  trips: function() {
    return Trips.find();
  },
  tripSelected: function() {
    return false;
  }
});
