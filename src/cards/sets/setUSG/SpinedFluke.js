"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinedFluke extends UnimplementedCard {
  constructor (game) {
    super(game, "Spined Fluke", "Urza's Saga", "USG");
  }
}

module.exports = SpinedFluke;
