"use strict";
const Constants = require ("../../../Constants");
const StandingTroopsBase = require("../setW17/StandingTroops");

class StandingTroops extends StandingTroopsBase {
  constructor (game) {
    super(game, "Standing Troops", "Tempest Remastered", "TPR");
  }
}

module.exports = StandingTroops;
