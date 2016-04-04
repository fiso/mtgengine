"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConvincingMirage extends Card {
  constructor(game) {
    super(game, "Convincing Mirage", "Magic 2010", "M10");
  }
}

module.exports = ConvincingMirage;
