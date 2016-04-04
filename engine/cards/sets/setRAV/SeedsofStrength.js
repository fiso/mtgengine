"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeedsofStrength extends Card {
  constructor(game) {
    super(game, "Seeds of Strength", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SeedsofStrength;
