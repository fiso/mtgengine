"use strict";
const Constants = require ("../../../Constants");
const TendrilsofCorruptionBase = require("../setC14/TendrilsofCorruption");

class TendrilsofCorruption extends TendrilsofCorruptionBase {
  constructor (game) {
    super(game, "Tendrils of Corruption", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = TendrilsofCorruption;
