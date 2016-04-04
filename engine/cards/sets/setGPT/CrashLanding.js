"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrashLanding extends Card {
  constructor(game) {
    super(game, "Crash Landing", "Guildpact", "GPT");
  }
}

module.exports = CrashLanding;
