"use strict";
const Constants = require ("../../../Constants");
const QuicksmithRebelBase = require("../setAER/QuicksmithRebel");

class QuicksmithRebel extends QuicksmithRebelBase {
  constructor (game) {
    super(game, "Quicksmith Rebel", "Aether Revolt Promos", "PAER");
  }
}

module.exports = QuicksmithRebel;
