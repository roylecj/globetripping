Template.tripItem.helpers({
    startDate: function(){
      return moment(this.startDate).format('Do MMM YYYY');
    },
    endDate: function() {
      return moment(this.endDate).format('Do MMM YYYY');
    }
});
