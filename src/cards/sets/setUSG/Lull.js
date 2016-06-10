"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lull extends UnimplementedCard {
  constructor (game) {
    super(game, "Lull", "Urza's Saga", "USG");
  }
}

module.exports = Lull;
