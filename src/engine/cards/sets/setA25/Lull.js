"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lull extends UnimplementedCard {
  constructor (game) {
    super(game, "Lull", "Masters 25", "A25");
  }
}

module.exports = Lull;
