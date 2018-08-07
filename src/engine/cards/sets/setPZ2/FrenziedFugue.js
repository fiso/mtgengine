"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrenziedFugue extends UnimplementedCard {
  constructor (game) {
    super(game, "Frenzied Fugue", "You Make the Cube", "PZ2");
  }
}

module.exports = FrenziedFugue;
