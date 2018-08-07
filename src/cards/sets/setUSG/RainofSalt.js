"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainofSalt extends UnimplementedCard {
  constructor (game) {
    super(game, "Rain of Salt", "Urza's Saga", "USG");
  }
}

module.exports = RainofSalt;
