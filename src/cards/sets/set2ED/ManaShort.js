"use strict";
const Constants = require ("../../../Constants");
const ManaShortBase = require("../setWC02/ManaShort");

class ManaShort extends ManaShortBase {
  constructor (game) {
    super(game, "Mana Short", "Unlimited Edition", "2ED");
  }
}

module.exports = ManaShort;
