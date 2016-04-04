"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkHeartoftheWood extends Card {
  constructor(game) {
    super(game, "Dark Heart of the Wood", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DarkHeartoftheWood;
