"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElspethKnightErrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Elspeth, Knight-Errant", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = ElspethKnightErrant;
