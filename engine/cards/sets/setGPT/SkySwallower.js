"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkySwallower extends Card {
  constructor(game) {
    super(game, "Sky Swallower", "Guildpact", "GPT");
  }
}

module.exports = SkySwallower;
