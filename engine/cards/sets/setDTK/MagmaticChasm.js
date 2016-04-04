"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagmaticChasm extends Card {
  constructor(game) {
    super(game, "Magmatic Chasm", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MagmaticChasm;
