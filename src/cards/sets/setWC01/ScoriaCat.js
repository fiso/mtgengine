"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScoriaCat extends UnimplementedCard {
  constructor (game) {
    super(game, "Scoria Cat", "World Championship Decks 2001", "WC01");
  }
}

module.exports = ScoriaCat;
