"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FinalPunishmentBase = require("../set9ED/FinalPunishment.js");

class FinalPunishment extends FinalPunishmentBase {
  constructor(game) {
    super(game, "Final Punishment", "Scourge", "SCG");
  }
}

module.exports = FinalPunishment;
