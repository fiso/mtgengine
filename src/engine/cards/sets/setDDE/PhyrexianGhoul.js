"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGhoulBase = require("../setA25/PhyrexianGhoul");

class PhyrexianGhoul extends PhyrexianGhoulBase {
  constructor (game) {
    super(game, "Phyrexian Ghoul", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianGhoul;
