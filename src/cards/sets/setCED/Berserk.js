"use strict";
const Constants = require ("../../../Constants");
const BerserkBase = require("../setCN2/Berserk");

class Berserk extends BerserkBase {
  constructor (game) {
    super(game, "Berserk", "Collectors’ Edition", "CED");
  }
}

module.exports = Berserk;
