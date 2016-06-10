"use strict";
const Constants = require ("../../../Constants");
const TendrilsofCorruptionBase = require("../setC14/TendrilsofCorruption");

class TendrilsofCorruption extends TendrilsofCorruptionBase {
  constructor (game) {
    super(game, "Tendrils of Corruption", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = TendrilsofCorruption;
