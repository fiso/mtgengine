"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MishrasFactory extends UnimplementedCard {
  constructor (game) {
    super(game, "Mishra's Factory", "Masters 25", "A25");
  }
}

module.exports = MishrasFactory;
