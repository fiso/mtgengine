"use strict";
const Constants = require ("../../../Constants");
const TendrilsofCorruptionBase = require("../setDDR/TendrilsofCorruption");

class TendrilsofCorruption extends TendrilsofCorruptionBase {
  constructor (game) {
    super(game, "Tendrils of Corruption", "Magic 2010", "M10");
  }
}

module.exports = TendrilsofCorruption;
