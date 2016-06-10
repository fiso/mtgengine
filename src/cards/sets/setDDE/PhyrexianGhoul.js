"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGhoulBase = require("../setBRB/PhyrexianGhoul");

class PhyrexianGhoul extends PhyrexianGhoulBase {
  constructor (game) {
    super(game, "Phyrexian Ghoul", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianGhoul;
