"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGargantuaBase = require("../setAPC/PhyrexianGargantua");

class PhyrexianGargantua extends PhyrexianGargantuaBase {
  constructor (game) {
    super(game, "Phyrexian Gargantua", "Eternal Masters", "EMA");
  }
}

module.exports = PhyrexianGargantua;
