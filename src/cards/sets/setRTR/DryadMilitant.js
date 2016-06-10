"use strict";
const Constants = require ("../../../Constants");
const DryadMilitantBase = require("../setpMGD/DryadMilitant");

class DryadMilitant extends DryadMilitantBase {
  constructor (game) {
    super(game, "Dryad Militant", "Return to Ravnica", "RTR");
  }
}

module.exports = DryadMilitant;
