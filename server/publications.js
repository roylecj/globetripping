Meteor.publish('trips', function(){
  return Trips.find();
});
Meteor.publish('friends', function(){
  return Friends.find({friendStatus: 'FRIEND'});
});
Meteor.publish('todo', function() {
  return Todo.find();
});
Meteor.publish('ideas', function() {
  return Ideas.find();
});
Meteor.publish('invitations', function() {
  return Friends.find({friendStatus: 'INVITE'});
});
Meteor.publish('tripCategories', function() {
  return TripCategories.find();
});
Meteor.publish('userProfiles', function() {
  return UserProfiles.find();
})
