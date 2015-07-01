//
/* ----------------------------------------------------------
  CJR - 01 Jul 15 - Added configuration for alerts
------------------------------------------------------------*/

// This is where I can put global variables and configuration
// This is for alerts so that we can position them - https://atmospherejs.com/juliancwirko/s-alert

alertConfiguration = {
  effect: 'scale',
  position: 'bottom-right',
  timeout: 5000,
  onRouteClose: false,
  stack: true
};

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
