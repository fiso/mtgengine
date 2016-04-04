"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoodwraithCorrupter extends Card {
  constructor(game) {
    super(game, "Woodwraith Corrupter", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WoodwraithCorrupter;
