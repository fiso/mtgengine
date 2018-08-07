"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrushingCanopy extends UnimplementedCard {
  constructor (game) {
    super(game, "Crushing Canopy", "Ixalan", "XLN");
  }
}

module.exports = CrushingCanopy;
