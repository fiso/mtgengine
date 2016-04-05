"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConvincingMirage extends UnimplementedCard {
  constructor(game) {
    super(game, "Convincing Mirage", "Magic 2010", "M10");
  }
}

module.exports = ConvincingMirage;
