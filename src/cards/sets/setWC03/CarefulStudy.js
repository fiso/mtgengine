"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarefulStudy extends UnimplementedCard {
  constructor (game) {
    super(game, "Careful Study", "World Championship Decks 2003", "WC03");
  }
}

module.exports = CarefulStudy;
