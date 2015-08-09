Template.tripItem.helpers({
    startDate: function(){
      return moment(this.startDate).format('Do MMM YYYY');
    },
    endDate: function() {
      return moment(this.endDate).format('Do MMM YYYY');
    },
    notItemHover: function() {
      if (Session.get("itemHover")) {
        return " hidden";
      } else {
        return "";
      }
    },
    itemHover: function() {
      if (Session.get("itemHover")) {
        return "";
      } else {
        return " hidden";
      }
    }
});
Template.tripItem.events({
  'tripItemClass mouseover': function(e) {
      Session.set("itemHover", true);
  },
  'tripItemClass mouseout': function(e) {
      Session.set("itemHover", false);
  }
})
