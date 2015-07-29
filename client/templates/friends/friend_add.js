Template.friendAdd.helpers({
  missingMessage: function() {
    if (Session.get("missingMessage")) {
      return "has-error";
    } else {
      return "";
    }
  },
  missingEmail: function() {
    if (Session.get("missingEmail")) {
      return "has-error";
    } else {
      return "";
    }
  }
});

Template.friendAdd.events({
  'submit form': function(e) {
    e.preventDefault();

    console.log('submitting');
    console.log('is this here???');

    var inviteEmailAddress = $(e.target).find('[name=emailAddress]').val();
    var inviteMessage = $(e.target).find('[name=invitation]').val();
    var errFlag = false;

    if (inviteEmailAddress.length < 1) {
       console.log("length < 1");
       errFlag = true;

       Session.set("missingEmail", true);

       sAlert.error('Please include an email address', alertConfiguration);
    };

    if (inviteMessage.length < 1) {
      console.log("message length < 1");

      Session.set("missingMessage", true);

       errFlag = true;
       sAlert.error('Need to include an invitation message', alertConfiguration);
    }

    if (errFlag = false) {

      Session.set("missingEmail", false);
      Session.set("missingMessage", false);

      sAlert.success('Invitation Sent', alertConfiguration);

      Router.go('friendList');
    }
  }
});
