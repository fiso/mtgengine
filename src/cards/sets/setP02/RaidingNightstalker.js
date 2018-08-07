"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaidingNightstalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Raiding Nightstalker", "Portal Second Age", "P02");
  }
}

module.exports = RaidingNightstalker;
