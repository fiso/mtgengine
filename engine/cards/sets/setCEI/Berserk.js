"use strict";
const Constants = require ("../../../Constants");
const BerserkBase = require("../setCED/Berserk");

class Berserk extends BerserkBase {
  constructor(game) {
    super(game, "Berserk", "International Collector's Edition", "CEI");
  }
}

module.exports = Berserk;
