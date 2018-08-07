"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FesterhideBoar extends UnimplementedCard {
  constructor (game) {
    super(game, "Festerhide Boar", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = FesterhideBoar;
