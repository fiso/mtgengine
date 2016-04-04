"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StandingArmy extends Card {
  constructor(game) {
    super(game, "Standing Army", "Unhinged", "UNH");
  }
}

module.exports = StandingArmy;
