"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShiftingLoyalties extends Card {
  constructor(game) {
    super(game, "Shifting Loyalties", "Fate Reforged", "FRF");
  }
}

module.exports = ShiftingLoyalties;
