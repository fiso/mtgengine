"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlowUnder extends UnimplementedCard {
  constructor (game) {
    super(game, "Plow Under", "World Championship Decks 2004", "WC04");
  }
}

module.exports = PlowUnder;
