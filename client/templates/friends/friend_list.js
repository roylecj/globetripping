
Template.friendList.helpers({
  friends: function() {
    return Friends.find({friendStatus: 'FRIEND'});
  },
  friendInvitations: function() {
    return Friends.find({friendStatus: 'INVITE'});
  },
  invitationCount: function() {
    return Friends.find({friendStatus: 'INVITE'}).count();
  },
  showFriends: function() {
    return Session.get('friendsVisible');
  },
  showInvites: function() {
    return Session.get('inviteVisible');
  }
});

Template.friendList.events({

})
