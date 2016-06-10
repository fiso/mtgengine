"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Barrin extends UnimplementedCard {
  constructor (game) {
    super(game, "Barrin", "Vanguard", "VAN");
  }
}

module.exports = Barrin;
