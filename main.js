var app = document.querySelector('#app');

app.config = {
  name: 'Google I/O 2015',
  app: 'PolyIO',
  date: 'May 28 - 29, 2015',
  location: 'San Francisco, CA',
  scheduleAPI: 'data/schedule.json', // raw response from https://events.google.com/io2015/api/v1/schedule
  menu: {
    selected: 'explore'
  },
  schedule: {
    selected: 0
  },
  session: {
    id: null,
    selected: 'list'
  }
};

app.addEventListener('template-bound', function(e) {

  var draw = document.querySelector('core-drawer-panel');
  var menu = document.querySelector('core-menu');
  var corePage = document.querySelector('core-animated-pages');

  var scheduleTabs = document.querySelector('div[data-page="schedule"] paper-tabs');
  var schedulePages = document.querySelector('div[data-page="schedule"] core-pages');

  var explore = document.querySelector('polyio-explore');
  var sessionDetails = document.querySelector('polyio-session-details');

  menu.addEventListener('core-select', function(e) {
    draw.closeDrawer();
  });

  explore.addEventListener('openSessionDetails', function(e) {
    // console.log(e.type, e.detail.id);
    app.config.session.id = e.detail.id;
    app.config.session.selected = 'session';
  });

  sessionDetails.addEventListener('closeSessionDetails', function(e) {
    // console.log(e.type, e.detail.id);
    app.config.session.id = '';
    app.config.session.selected = 'list';
  });

  corePage.addEventListener('core-animated-pages-transition-end', function(e) {

    var speakersList = sessionDetails.shadowRoot.querySelector('#speakersList');
    if (speakersList) {
      speakersList.updateSize();
    }

  });
});

window.addEventListener('load', function() {
  navigator.serviceWorker.register('service-worker.js', {scope: './'})
    .then(function(r) {
      console.log('registered service worker');
    })
    .catch(function(error) {
      console.error(error);
    });
});
