"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrophyHunter extends Card {
  constructor(game) {
    super(game, "Trophy Hunter", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TrophyHunter;
