"use strict";
const Constants = require ("../../../Constants");
const PhyrexianDefilerBase = require("../setVMA/PhyrexianDefiler");

class PhyrexianDefiler extends PhyrexianDefilerBase {
  constructor (game) {
    super(game, "Phyrexian Defiler", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianDefiler;
