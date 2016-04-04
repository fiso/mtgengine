"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShelteredAerie extends Card {
  constructor(game) {
    super(game, "Sheltered Aerie", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ShelteredAerie;
