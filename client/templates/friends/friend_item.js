Template.friendItem.onCreated( function() {
    Session.set("deleteFocus", false);
});

Template.friendItem.helpers({
    friendSince: function() {
      if (this.friendStatus === "INVITE") {
        return "Invited on " + moment(this.createdAt).format("Do MMM YYYY");
      } else {
        return "Friends since " + moment(this.createdAt).format('Do MMM YYYY');        
      }
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

Template.friendItem.events({
   'click .deleteX': function (e) {
     console.log("deleteX Clicked");
     Session.set("deleteItem", this._id);
     Session.set("deleteFocus", true);
   },
   'click .cancelButton': function(e) {
     Session.set("deleteItem", "");
     Session.set("deleteFocus", false);
   },
   'click .deleteButton': function(e) {
     // We can delete the record

     var currentFriendId = this._id;

     Friends.remove(currentFriendId);

     sAlert.success("'" + this.friendName + "' Removed", alertConfiguration);

//     Router.go('tripList');
   }
});
