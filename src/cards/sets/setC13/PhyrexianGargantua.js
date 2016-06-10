"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGargantuaBase = require("../setAPC/PhyrexianGargantua");

class PhyrexianGargantua extends PhyrexianGargantuaBase {
  constructor (game) {
    super(game, "Phyrexian Gargantua", "Commander 2013 Edition", "C13");
  }
}

module.exports = PhyrexianGargantua;
