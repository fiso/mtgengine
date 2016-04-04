"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StandingTroopsBase = require("../set6ED/StandingTroops.js");

class StandingTroops extends StandingTroopsBase {
  constructor(game) {
    super(game, "Standing Troops", "Seventh Edition", "7ED");
  }
}

module.exports = StandingTroops;
