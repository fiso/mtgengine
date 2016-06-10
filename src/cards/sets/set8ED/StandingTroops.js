"use strict";
const Constants = require ("../../../Constants");
const StandingTroopsBase = require("../set6ED/StandingTroops");

class StandingTroops extends StandingTroopsBase {
  constructor (game) {
    super(game, "Standing Troops", "Eighth Edition", "8ED");
  }
}

module.exports = StandingTroops;
