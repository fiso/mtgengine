"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EyeoftheStorm extends Card {
  constructor(game) {
    super(game, "Eye of the Storm", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = EyeoftheStorm;
