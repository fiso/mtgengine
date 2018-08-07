"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainofFilth extends UnimplementedCard {
  constructor (game) {
    super(game, "Rain of Filth", "Urza's Saga", "USG");
  }
}

module.exports = RainofFilth;
