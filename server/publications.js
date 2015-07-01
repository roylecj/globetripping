Meteor.publish('trips', function(){
  return Trips.find();
});
Meteor.publish('friends', function(){
  return Friends.find();
})
