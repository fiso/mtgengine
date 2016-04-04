"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TendrilsofCorruptionBase = require("../setC14/TendrilsofCorruption.js");

class TendrilsofCorruption extends TendrilsofCorruptionBase {
  constructor(game) {
    super(game, "Tendrils of Corruption", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = TendrilsofCorruption;
