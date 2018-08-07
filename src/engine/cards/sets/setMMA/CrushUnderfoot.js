"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrushUnderfoot extends UnimplementedCard {
  constructor (game) {
    super(game, "Crush Underfoot", "Modern Masters", "MMA");
  }
}

module.exports = CrushUnderfoot;
