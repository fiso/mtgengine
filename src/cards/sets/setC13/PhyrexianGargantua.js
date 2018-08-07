"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGargantuaBase = require("../setEMA/PhyrexianGargantua");

class PhyrexianGargantua extends PhyrexianGargantuaBase {
  constructor (game) {
    super(game, "Phyrexian Gargantua", "Commander 2013", "C13");
  }
}

module.exports = PhyrexianGargantua;
