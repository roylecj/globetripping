Template.header.onCreated(function() {
  Session.set('friendsVisible', true);
  Session.set('inviteVisible', true);
});

Template.header.helpers({
  isCurrentMenu: function(menuCurrent, flag) {
    var currentMenu = Session.get("currentMenu");

    if (currentMenu === menuCurrent) {
      if (flag === 'class') {
        return 'active';
      }
      else {
          return true;
      }
    } else {

      if (flag === 'class') {
      return '';
      } else {
        return false;
      }
    }
  },
  friendCount: function() {
    return Friends.find({friendStatus: 'FRIEND'}).count();
  },
  invitationCount: function() {
    return Friends.find({friendStatus: 'INVITE'}).count();
  },
  friendButton: function() {
    if (Session.get('friendsVisible')) {
      return 'btn-primary';
    } else {
      return 'btn-default';
    }
  },
  inviteButton: function() {
    if (Session.get('inviteVisible')) {
      return 'btn-primary';
    } else {
      return 'btn-default';
    }
  }
});

Template.header.events({
  'keypress .search': function(e) {

    var currentSearch = $(e.target).find('[name=search]').val();
    console.log(currentSearch);

  },
  'click .friendSwitch': function(e) {
    var friendVisible;

    friendVisible = Session.get('friendsVisible');

    Session.set('friendsVisible', ! friendVisible);
  },
  'click .inviteSwitch': function(e) {
    var inviteVisible;

    inviteVisible = Session.get('inviteVisible');

    Session.set('inviteVisible', ! inviteVisible);
  }
})
