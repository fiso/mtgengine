"use strict";
const Constants = require ("../../../Constants");
const SpreadtheSicknessBase = require("../setMM2/SpreadtheSickness");

class SpreadtheSickness extends SpreadtheSicknessBase {
  constructor (game) {
    super(game, "Spread the Sickness", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = SpreadtheSickness;
