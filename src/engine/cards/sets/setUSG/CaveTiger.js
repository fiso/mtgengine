"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaveTiger extends UnimplementedCard {
  constructor (game) {
    super(game, "Cave Tiger", "Urza's Saga", "USG");
  }
}

module.exports = CaveTiger;
