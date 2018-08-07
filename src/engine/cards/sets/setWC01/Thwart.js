"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thwart extends UnimplementedCard {
  constructor (game) {
    super(game, "Thwart", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Thwart;
