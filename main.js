var app = document.querySelector('#app');

app.config ={
  name: 'Google I/O 2015',
  date: 'May 28 - 29, 2015',
  location: 'San Francisco, CA',
  menu: {
    selected: "explore"
  },
  schedule: {
    selected: 0
  }
};

app.addEventListener('template-bound',function(e) {
  var draw = document.querySelector('core-drawer-panel');
  var menu = document.querySelector('core-menu');

  var scheduleTabs = document.querySelector('div[data-page="schedule"] paper-tabs');
  var schedulePages = document.querySelector('div[data-page="schedule"] core-pages');
  
  menu.addEventListener('core-select',function(e) {
    draw.closeDrawer();
  });
});
