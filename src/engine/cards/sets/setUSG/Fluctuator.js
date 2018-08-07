"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fluctuator extends UnimplementedCard {
  constructor (game) {
    super(game, "Fluctuator", "Urza's Saga", "USG");
  }
}

module.exports = Fluctuator;
