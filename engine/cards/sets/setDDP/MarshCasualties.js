"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarshCasualtiesBase = require("../setDDM/MarshCasualties.js");

class MarshCasualties extends MarshCasualtiesBase {
  constructor(game) {
    super(game, "Marsh Casualties", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = MarshCasualties;
