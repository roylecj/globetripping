Template.tripItemCard.onCreated(function() {
  $('.shape').shape();
});


Template.tripItemCard.helpers({
  startDate: function(){
    return moment(this.startDate).format('Do MMM YYYY');
  },
  endDate: function() {
    return moment(this.endDate).format('Do MMM YYYY');
  },
  frontActive: function() {

    if (Session.get("activeShape") === this._id) {
      // If this is the id - then what are we looking for

      if (Session.get("frontActive")) {
        return "active"
      } else {
        return "";
      }
    } else {
      // If this is not the active card, then show it on the front.
      return "active";
    }
  },
  backActive: function() {
    if (Session.get("activeShape") === this._id) {
      // If this is the id - then what are we looking for

      if (Session.get("frontActive")) {
        return ""
      } else {
        return "active";
      }
    } else {
      // If this is not the active card, then show it on the front.
      return "";
    }

  }
});

Template.tripItemCard.events({
    'click .shape': function(e) {
        $(e.target).shape('flip left');

        console.log("moving shape");
        if (Session.get("frontActive")) {
          Session.set("activeShape", this._id);
          Session.set("frontActive", false);
        } else {
          Session.set("activeShape", this._id);
          Session.set("frontActive", true);
        }

    },
    'mouseover .description': function(e) {
      // Expand the description if we mouse over it...
      $(e.target).removeClass('panel-body');
      $(e.target).addClass('panel-body-full');
    },
    'mouseout .description': function(e) {
      // Now bring it back.
      $(e.target).removeClass('panel-body-full');
      $(e.target).addClass('panel-body');
    }
});
