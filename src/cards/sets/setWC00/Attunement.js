"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Attunement extends UnimplementedCard {
  constructor (game) {
    super(game, "Attunement", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Attunement;
