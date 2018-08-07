"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomCentaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantom Centaur", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = PhantomCentaur;
