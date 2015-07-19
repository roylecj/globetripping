Template.friendItem.onCreated( function() {
    Session.set("deleteFocus", false);
});

Template.friendItem.helpers({
    isDeleteFocus: function(focusType) {

      console.log("focus=" + focusType);

      if (focusType === 'x') {
        if (! Session.set("deleteFocus")) {
          return " ";
        }
        else
        {
          console.log("hiding");

          return "hide ";
        }
      } else {
        if (! Session.set("deleteFocus")) {
          return "hide "; }

          else {
            return ""
          }
        }
      }
    });

Template.friendItem.events({
   'click .deleteX': function (e) {
     console.log("deleteX Clicked");
     Session.set("deleteFocus", true);
   }
});
