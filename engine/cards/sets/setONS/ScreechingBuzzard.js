"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScreechingBuzzard extends UnimplementedCard {
  constructor(game) {
    super(game, "Screeching Buzzard", "Onslaught", "ONS");
  }
}

module.exports = ScreechingBuzzard;
