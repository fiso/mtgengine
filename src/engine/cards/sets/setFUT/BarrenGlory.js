"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrenGlory extends UnimplementedCard {
  constructor (game) {
    super(game, "Barren Glory", "Future Sight", "FUT");
  }
}

module.exports = BarrenGlory;
