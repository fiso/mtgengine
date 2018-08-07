"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StampedingRhino extends UnimplementedCard {
  constructor (game) {
    super(game, "Stampeding Rhino", "Welcome Deck 2017", "W17");
  }
}

module.exports = StampedingRhino;
