const express = require('express')

class TestRouter {
  constructor(router) {
    this.router = router
    this.setupRouter()
  }
  
  get testRouter() {
    return this.router
  }

  setupRouter() {
    this.router
    /* /api/test/add */
    .get('/add', (req, res) => res.json({ msg: 'Adding new test item!' }))
    /* /api/test/edit/:id */
    .get('/edit/:id', (req, res) => res.json({ msg: `Editing item with id ${req.params.id}`}))
    /* /api/test/items */
    .get('/items', (req, res) => res.json({msg: 'All test items!'}))
  }
}

module.exports = {
  TestRouter,
  testRouter: new TestRouter(express.Router()).testRouter
}