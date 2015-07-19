Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('trips'), Meteor.subscribe('friends'), Meteor.subscribe('invitations')];
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
});

Router.route("/trip/:_id/details", {
  name: "tripDetails",
  data: function() {
    return Trips.findOne(this.params._id);
  }
});

Router.route('/ideas', {
    name: 'ideaList',
    data: function() {
      return Ideas.find();
    }
});

Router.route('/friends', {
  name: 'friendList',
  data: function() {
    return Friends.find();
  }
});

Router.route('/friends/add', {
    name: 'friendAdd'
});

Router.route('/friends/:_id', {
  name: 'friendView',
  data: function() {
    return Friends.findOne(this.params._id);
  }
});

Router.route('/todo', {
    name: 'todoList',
    data: function() {
      return Todo.find();
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

var setTodoMenu = function() {
    Session.set('currentMenu', 'todo');
    this.next();
};


Router.onBeforeAction(setTripMenu, {only: 'tripList'});
Router.onBeforeAction(setFriendsMenu, {only: 'friendList'});
Router.onBeforeAction(setIdeasMenus, {only: 'ideaList'});
Router.onBeforeAction(setTodoMenu, {only: 'todoList'});
