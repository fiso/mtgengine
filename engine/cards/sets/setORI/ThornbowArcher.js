"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornbowArcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Thornbow Archer", "Magic Origins", "ORI");
  }
}

module.exports = ThornbowArcher;
