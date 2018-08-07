"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrashLanding extends UnimplementedCard {
  constructor (game) {
    super(game, "Crash Landing", "Guildpact", "GPT");
  }
}

module.exports = CrashLanding;
