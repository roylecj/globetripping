Trips = new Mongo.Collection("trips");

Meteor.methods({
  tripInsert: function(tripProperties) {
    check(Meteor.userId(), String);
    check(tripProperties, {
      tripDescription: String,
      destinationCity: String,
      startDate: Date,
      endDate: Date
    });

//    var errors = validatePost(postAttributes);

    var user = Meteor.user();

    var trip = _.extend(tripProperties, {
      userId: user._id,
      createdBy: user.username,
      createdAt: new Date(),
      updatedBy: user.username,
      updatedAt: new Date()
    });

    var tripId = Trips.insert(trip);
    return {
      _id: tripId
    };
  },
  tripUpdate: function(tripId, tripProperties) {
    check(tripId, String);

//    check(Meteor.userId(), String);

    check(tripProperties, {
      tripDescription: String,
      destinationCity: String,
      startDate: Date,
      endDate: Date
    });

    Trips.update(tripId, {$set: tripProperties});
  }
});
