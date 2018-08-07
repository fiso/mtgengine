"use strict";
const Constants = require ("../../../Constants");
const ManaShortBase = require("../setWC02/ManaShort");

class ManaShort extends ManaShortBase {
  constructor (game) {
    super(game, "Mana Short", "Collectors’ Edition", "CED");
  }
}

module.exports = ManaShort;
