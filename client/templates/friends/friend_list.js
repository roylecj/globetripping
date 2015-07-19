Template.friendList.helpers({
  friends: function() {
    return Friends.find();
  },
  invitationCount: function() {
    return Invitations.find().count();
  }
});
