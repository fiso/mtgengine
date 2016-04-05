"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralKrushok extends UnimplementedCard {
  constructor(game) {
    super(game, "Feral Krushok", "Fate Reforged", "FRF");
  }
}

module.exports = FeralKrushok;
