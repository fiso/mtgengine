"use strict";
const Constants = require ("../../../Constants");
const MarshCasualtiesBase = require("../setDDM/MarshCasualties");

class MarshCasualties extends MarshCasualtiesBase {
  constructor (game) {
    super(game, "Marsh Casualties", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = MarshCasualties;
