"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TendrilsofCorruptionBase = require("../setC14/TendrilsofCorruption.js");

class TendrilsofCorruption extends TendrilsofCorruptionBase {
  constructor(game) {
    super(game, "Tendrils of Corruption", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = TendrilsofCorruption;
