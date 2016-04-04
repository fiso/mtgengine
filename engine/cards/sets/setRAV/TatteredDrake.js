"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TatteredDrake extends Card {
  constructor(game) {
    super(game, "Tattered Drake", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TatteredDrake;
