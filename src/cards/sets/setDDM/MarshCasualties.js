"use strict";
const Constants = require ("../../../Constants");
const MarshCasualtiesBase = require("../setDDP/MarshCasualties");

class MarshCasualties extends MarshCasualtiesBase {
  constructor (game) {
    super(game, "Marsh Casualties", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = MarshCasualties;
