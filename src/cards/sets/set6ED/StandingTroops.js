"use strict";
const Constants = require ("../../../Constants");
const StandingTroopsBase = require("../setW17/StandingTroops");

class StandingTroops extends StandingTroopsBase {
  constructor (game) {
    super(game, "Standing Troops", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StandingTroops;
