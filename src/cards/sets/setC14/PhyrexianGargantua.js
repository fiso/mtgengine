"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGargantuaBase = require("../setAPC/PhyrexianGargantua");

class PhyrexianGargantua extends PhyrexianGargantuaBase {
  constructor (game) {
    super(game, "Phyrexian Gargantua", "Commander 2014", "C14");
  }
}

module.exports = PhyrexianGargantua;
