"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianGargantuaBase = require("../setAPC/PhyrexianGargantua.js");

class PhyrexianGargantua extends PhyrexianGargantuaBase {
  constructor(game) {
    super(game, "Phyrexian Gargantua", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianGargantua;
