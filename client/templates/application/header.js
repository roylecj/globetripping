Template.header.helpers({
  isCurrentMenu: function(menuCurrent, flag) {
    var currentMenu = Session.get("currentMenu");

    if (currentMenu === menuCurrent) {
      if (flag === 'class') {
        return 'active';
      }
      else {
          return true;
      }
    } else {

      if (flag === 'class') {
      return '';
      } else {
        return false;
      }
    }
  }
});

Template.header.events({
  'keypress .search': function(e) {

    var currentSearch = $(e.target).find('[name=search]').val();
    console.log(currentSearch);

  }
})
