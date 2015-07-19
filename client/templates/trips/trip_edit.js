Template.tripEdit.onCreated(function() {
  Session.set('tripEditErrors', {});
  Session.set('tripDeleteAction', {
    message: '',
    action: ''});
});

Template.tripEdit.onRendered(function() {
    this.$('.datetimepicker').datetimepicker({
      format: globalDateFormat
    });
});

Template.tripEdit.helpers({
    startValidDate: function() {
        return this.endDate;
        },
    endValidDate: function() {
        return this.startDate;
      },
    startDate: function() {
        return moment(this.startDate).format(globalDateFormat);
    },
    endDate: function() {
        return moment(this.endDate).format(globalDateFormat);
    },
    messageDeleteAction: function() {
        return Session.get('tripDeleteAction')['message'];
          },
    deleteAlertType: function() {
        if (Session.get('tripDeleteAction')['action'] === "CANCEL") {
          return "alert-warning";
        } else {
          if (Session.get('tripDeleteAction')['action'] === "DELETED") {
            return "alert-info";
          }
        }
    },
    hideDeleted: function() {
      if (Session.get('tripDeleteAction')['action'] !== '') {
        return true;
      }
      else {
        return false;
      }
    },
    errorMessage: function(field){
        return Session.get('tripEditErrors')[field]
    },
    errorClass: function(field){
        return !!Session.get('tripEditErrors')[field] ? 'has-error' : '';
    }
});

Template.tripEdit.events({
  'submit form': function(e){
      e.preventDefault();

      var currentTripId = this._id;

      console.log("currentTripId = " + currentTripId);

      var tripProperties = {
        tripDescription: $(e.target).find('[name=tripDescription]').val(),
        destinationCity: $(e.target).find('[name=destinationCity]').val(),
        startDate: new Date($(e.target).find('[name=startDate]').val()),
        endDate: new Date($(e.target).find('[name=endDate]').val())
      };

      Meteor.call('tripUpdate', currentTripId, tripProperties, function(error, result) {
        // display an error, if there is one...

        if (error) {
          throwError(error.reason);
        }

        if (result.postExists) {
          throwError('This link has already been posted');
        }

        Router.go('tripList');

      });
  },
  'click .delete': function(e) {

    var currentTripId = this._id;
    console.log(this._id);

    bootbox.confirm("Are you sure?", function(result) {
      if (result) {
        // TRUE = Deleting

        Trips.remove(currentTripId);

        sAlert.success('Trip Removed', alertConfiguration);

        Router.go('tripList');
      } else {
        sAlert.warning('Trip removal cancelled', alertConfiguration)
      }
    });
  }
});
