"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGargantuaBase = require("../setEMA/PhyrexianGargantua");

class PhyrexianGargantua extends PhyrexianGargantuaBase {
  constructor (game) {
    super(game, "Phyrexian Gargantua", "Apocalypse", "APC");
  }
}

module.exports = PhyrexianGargantua;
