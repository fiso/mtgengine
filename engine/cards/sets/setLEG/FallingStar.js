"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FallingStar extends UnimplementedCard {
  constructor(game) {
    super(game, "Falling Star", "Legends", "LEG");
  }
}

module.exports = FallingStar;
