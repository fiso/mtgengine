"use strict";
const Constants = require ("../../../Constants");
const GhaltaPrimalHungerBase = require("../setPRIX/GhaltaPrimalHunger");

class GhaltaPrimalHunger extends GhaltaPrimalHungerBase {
  constructor (game) {
    super(game, "Ghalta, Primal Hunger", "Rivals of Ixalan", "RIX");
  }
}

module.exports = GhaltaPrimalHunger;
