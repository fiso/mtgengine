"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGargantuaBase = require("../setAPC/PhyrexianGargantua");

class PhyrexianGargantua extends PhyrexianGargantuaBase {
  constructor (game) {
    super(game, "Phyrexian Gargantua", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianGargantua;
