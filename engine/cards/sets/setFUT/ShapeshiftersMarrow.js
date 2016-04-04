"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShapeshiftersMarrow extends Card {
  constructor(game) {
    super(game, "Shapeshifter's Marrow", "Future Sight", "FUT");
  }
}

module.exports = ShapeshiftersMarrow;
