"use strict";
const Constants = require ("../../../Constants");
const BerserkBase = require("../setCN2/Berserk");

class Berserk extends BerserkBase {
  constructor (game) {
    super(game, "Berserk", "Vintage Masters", "VMA");
  }
}

module.exports = Berserk;
