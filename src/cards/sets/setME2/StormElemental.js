"use strict";
const Constants = require ("../../../Constants");
const StormElementalBase = require("../setALL/StormElemental");

class StormElemental extends StormElementalBase {
  constructor (game) {
    super(game, "Storm Elemental", "Masters Edition II", "ME2");
  }
}

module.exports = StormElemental;
