"use strict";
const Constants = require ("../../../Constants");
const BerserkBase = require("../setCED/Berserk");

class Berserk extends BerserkBase {
  constructor(game) {
    super(game, "Berserk", "Masters Edition", "MED");
  }
}

module.exports = Berserk;
