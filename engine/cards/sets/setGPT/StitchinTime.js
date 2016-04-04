"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StitchinTime extends Card {
  constructor(game) {
    super(game, "Stitch in Time", "Guildpact", "GPT");
  }
}

module.exports = StitchinTime;
