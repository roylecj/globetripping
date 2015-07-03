// This is configuration of the Alert package which is global
// and provides standard alerting functionality across the application...
// Source: https://atmospherejs.com/juliancwirko/s-alert

Meteor.startup(function () {

    sAlert.config({
        effect: '',
        position: 'bottom-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0
    });
});
