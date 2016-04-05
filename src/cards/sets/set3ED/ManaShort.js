"use strict";
const Constants = require ("../../../Constants");
const ManaShortBase = require("../set6ED/ManaShort");

class ManaShort extends ManaShortBase {
  constructor(game) {
    super(game, "Mana Short", "Revised Edition", "3ED");
  }
}

module.exports = ManaShort;
