"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShelteredAerie extends UnimplementedCard {
  constructor(game) {
    super(game, "Sheltered Aerie", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ShelteredAerie;
