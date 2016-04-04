"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VindictiveMob extends Card {
  constructor(game) {
    super(game, "Vindictive Mob", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VindictiveMob;
