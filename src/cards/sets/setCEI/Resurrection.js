"use strict";
const Constants = require ("../../../Constants");
const ResurrectionBase = require("../setCED/Resurrection");

class Resurrection extends ResurrectionBase {
  constructor (game) {
    super(game, "Resurrection", "International Collector's Edition", "CEI");
  }
}

module.exports = Resurrection;
