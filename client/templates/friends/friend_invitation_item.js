Template.friendInvitationItem.onCreated( function() {
    Session.set("deleteFocus", false);
});

Template.friendInvitationItem.helpers({
  friendSince: function() {
      return "Invited on " + moment(this.createdAt).format('Do MMM YYYY');
  },
  isDeleteFocus: function(focusType) {
    if (focusType === 'x') {
      if (! Session.get("deleteFocus")) {
        return " ";
      } else {
        if (Session.get("deleteItem") === this._id) {
          return "hide ";
        } else {
          return " ";
        }
      }
    } else {
      if (! Session.get("deleteFocus")) {
        return "hide ";
      } else {

          if (Session.get("deleteItem") === this._id) {
            return "";
          } else {
            return "hide ";
          }
        }
      }
    }
});
