"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RumblingCrescendo extends UnimplementedCard {
  constructor(game) {
    super(game, "Rumbling Crescendo", "Urza's Saga", "USG");
  }
}

module.exports = RumblingCrescendo;
