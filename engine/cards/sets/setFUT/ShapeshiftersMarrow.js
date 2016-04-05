"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShapeshiftersMarrow extends UnimplementedCard {
  constructor(game) {
    super(game, "Shapeshifter's Marrow", "Future Sight", "FUT");
  }
}

module.exports = ShapeshiftersMarrow;
