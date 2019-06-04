
const routes = [
  require('./controller/admin'),
  require('./controller/comercial'),
  require('./controller/client'),
  require('./controller/tecnico'),
  require('./controller/login')
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};