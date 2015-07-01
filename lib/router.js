Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('trips'), Meteor.subscribe('friends')];
  }
});

Router.route("/", {
  name: "tripList"
  });

Router.route("/trip/:_id", {
  name: "tripEdit",
  data: function() {
    return Trips.findOne(this.params._id);
  }
})

Router.route('/friends', {
  name: 'friendList',
  data: function() {
    return Friends.find();
  }
});

Router.route('/friends/:_id', {
  name: 'friendView',
  data: function() {
    return Friends.findOne(this.params._id);
  }
});

// There are other ways of doing the same thing - but this is very easy to read.

var setTripMenu = function() {
    Session.set('currentMenu', 'trips');
    this.next();
};

var setIdeasMenus = function() {
    Session.set('currentMenu', 'ideas');
    this.next();
};

var setFriendsMenu = function() {
    Session.set('currentMenu', 'friends');
    this.next();
};

Router.onBeforeAction(setTripMenu, {only: 'tripList'});
Router.onBeforeAction(setFriendsMenu, {only: 'friendList'});
