Template.friendAdd.helpers({

});

Template.friendAdd.events({
  'submit form': function(e) {
    e.preventDefault();

    console.log('submitting');

    var inviteEmailAddress = $(e.target).find('[name=emailAddress]').val();
    var inviteMessage = $(e.target).find('[name=invitation]').val();

    sAlert.success('Invitation Sent', alertConfiguration);

    Router.go('friendList');
  }
});
