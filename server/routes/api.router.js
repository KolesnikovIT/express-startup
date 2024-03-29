const express = require('express')

const { testRouter } = require('./test')

class ApiRouter {
  constructor(router, routes) {
    this.router = router;
    this.routes = routes;
    this.setupApiRoutes(routes);
  }

  get apiRouter() {
    return this.router;
  }
  addApiRoute(url, router) {
    this.router.use(url, router);
  }
  setupApiRoutes(routes) {
    routes.forEach((route) => {
      this.addApiRoute(route.url, route.router);
    });
  }
}

const routes = [
  { url: '/test', router: testRouter }
]

module.exports = {
  ApiRouter,
  apiRouter: new ApiRouter(express.Router(), routes).apiRouter
}