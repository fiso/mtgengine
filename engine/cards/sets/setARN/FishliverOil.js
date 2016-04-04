"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FishliverOil extends UnimplementedCard {
  constructor(game) {
    super(game, "Fishliver Oil", "Arabian Nights", "ARN");
  }
}

module.exports = FishliverOil;
