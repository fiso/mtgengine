"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGargantuaBase = require("../setAPC/PhyrexianGargantua");

class PhyrexianGargantua extends PhyrexianGargantuaBase {
  constructor (game) {
    super(game, "Phyrexian Gargantua", "Ninth Edition", "9ED");
  }
}

module.exports = PhyrexianGargantua;
