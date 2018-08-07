"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshCasualties extends UnimplementedCard {
  constructor (game) {
    super(game, "Marsh Casualties", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = MarshCasualties;
