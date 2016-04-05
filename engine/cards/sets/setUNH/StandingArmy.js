"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StandingArmy extends UnimplementedCard {
  constructor(game) {
    super(game, "Standing Army", "Unhinged", "UNH");
  }
}

module.exports = StandingArmy;
