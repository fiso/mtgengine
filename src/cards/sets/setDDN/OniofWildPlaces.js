"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OniofWildPlaces extends UnimplementedCard {
  constructor(game) {
    super(game, "Oni of Wild Places", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = OniofWildPlaces;
