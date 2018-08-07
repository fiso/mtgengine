"use strict";
const Constants = require ("../../../Constants");
const DryadMilitantBase = require("../setRTR/DryadMilitant");

class DryadMilitant extends DryadMilitantBase {
  constructor (game) {
    super(game, "Dryad Militant", "Return to Ravnica Promos", "PRTR");
  }
}

module.exports = DryadMilitant;
