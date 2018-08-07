"use strict";
const Constants = require ("../../../Constants");
const QuicksmithRebelBase = require("../setAER/QuicksmithRebel");

class QuicksmithRebel extends QuicksmithRebelBase {
  constructor (game) {
    super(game, "Quicksmith Rebel", "Magic Online Promos", "PRM");
  }
}

module.exports = QuicksmithRebel;
