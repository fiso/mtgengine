"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sheep extends UnimplementedCard {
  constructor (game) {
    super(game, "Sheep", "Unglued Tokens", "TUGL");
  }
}

module.exports = Sheep;
