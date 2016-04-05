"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SamiteHealer extends UnimplementedCard {
  constructor(game) {
    super(game, "Samite Healer", "Anthologies", "ATH");
  }
}

module.exports = SamiteHealer;
