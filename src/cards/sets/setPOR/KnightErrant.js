"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightErrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight Errant", "Portal", "POR");
  }
}

module.exports = KnightErrant;
