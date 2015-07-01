Template.header.helpers({
  isCurrentMenu: function(menuCurrent) {
    var currentMenu = Session.get("currentMenu");

    if (currentMenu === menuCurrent) {
      return 'active';
    } else {
      return '';
    }
  }
});
