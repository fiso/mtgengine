"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NewHorizons extends UnimplementedCard {
  constructor (game) {
    super(game, "New Horizons", "Ixalan", "XLN");
  }
}

module.exports = NewHorizons;
