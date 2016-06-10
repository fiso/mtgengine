"use strict";
const Constants = require ("../../../Constants");
const FinalPunishmentBase = require("../set9ED/FinalPunishment");

class FinalPunishment extends FinalPunishmentBase {
  constructor (game) {
    super(game, "Final Punishment", "Scourge", "SCG");
  }
}

module.exports = FinalPunishment;
