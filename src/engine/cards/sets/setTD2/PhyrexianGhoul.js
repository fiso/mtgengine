"use strict";
const Constants = require ("../../../Constants");
const PhyrexianGhoulBase = require("../setA25/PhyrexianGhoul");

class PhyrexianGhoul extends PhyrexianGhoulBase {
  constructor (game) {
    super(game, "Phyrexian Ghoul", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = PhyrexianGhoul;
