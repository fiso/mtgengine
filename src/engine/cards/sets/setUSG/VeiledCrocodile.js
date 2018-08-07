"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeiledCrocodile extends UnimplementedCard {
  constructor (game) {
    super(game, "Veiled Crocodile", "Urza's Saga", "USG");
  }
}

module.exports = VeiledCrocodile;
