"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AzureDrake extends Card {
  constructor(game) {
    super(game, "Azure Drake", "Battle Royale Box Set", "BRB");
  }
}

module.exports = AzureDrake;
