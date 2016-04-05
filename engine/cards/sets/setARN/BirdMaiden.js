"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BirdMaiden extends UnimplementedCard {
  constructor(game) {
    super(game, "Bird Maiden", "Arabian Nights", "ARN");
  }
}

module.exports = BirdMaiden;
