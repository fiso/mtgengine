"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeatofResistance extends UnimplementedCard {
  constructor (game) {
    super(game, "Feat of Resistance", "Khans of Tarkir", "KTK");
  }
}

module.exports = FeatofResistance;
