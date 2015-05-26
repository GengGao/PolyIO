var app = document.querySelector('#app');
// var app = document.querySelector('#app');

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
  }
};

app.addEventListener('template-bound', function(e) {

  var draw = document.querySelector('core-drawer-panel');
  var menu = document.querySelector('core-menu');

  var scheduleTabs = document.querySelector('div[data-page="schedule"] paper-tabs');
  var schedulePages = document.querySelector('div[data-page="schedule"] core-pages');

  menu.addEventListener('core-select', function(e) {
    draw.closeDrawer();
  });
});
