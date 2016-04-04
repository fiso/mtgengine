"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeatofResistance extends Card {
  constructor(game) {
    super(game, "Feat of Resistance", "Khans of Tarkir", "KTK");
  }
}

module.exports = FeatofResistance;
