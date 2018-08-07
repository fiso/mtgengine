"use strict";
const Constants = require ("../../../Constants");
const SterlingGroveBase = require("../setTD0/SterlingGrove");

class SterlingGrove extends SterlingGroveBase {
  constructor (game) {
    super(game, "Sterling Grove", "Magic Online Promos", "PRM");
  }
}

module.exports = SterlingGrove;
