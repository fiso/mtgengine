"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoebringerDemon extends Card {
  constructor(game) {
    super(game, "Woebringer Demon", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WoebringerDemon;
