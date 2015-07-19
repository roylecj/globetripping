Template.tripDetails.helpers({
  startDate: function(){
    return moment(this.startDate).format(globalDateFormat);
  },
  endDate: function() {
    return moment(this.endDate).format(globalDateFormat);
  }
});
