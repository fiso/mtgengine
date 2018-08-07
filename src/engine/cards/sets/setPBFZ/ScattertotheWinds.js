"use strict";
const Constants = require ("../../../Constants");
const ScattertotheWindsBase = require("../setBFZ/ScattertotheWinds");

class ScattertotheWinds extends ScattertotheWindsBase {
  constructor (game) {
    super(game, "Scatter to the Winds", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = ScattertotheWinds;
