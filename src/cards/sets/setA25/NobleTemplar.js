"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobleTemplar extends UnimplementedCard {
  constructor (game) {
    super(game, "Noble Templar", "Masters 25", "A25");
  }
}

module.exports = NobleTemplar;
