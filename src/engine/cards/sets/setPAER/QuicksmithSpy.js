"use strict";
const Constants = require ("../../../Constants");
const QuicksmithSpyBase = require("../setAER/QuicksmithSpy");

class QuicksmithSpy extends QuicksmithSpyBase {
  constructor (game) {
    super(game, "Quicksmith Spy", "Aether Revolt Promos", "PAER");
  }
}

module.exports = QuicksmithSpy;
