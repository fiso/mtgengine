"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruxofFate extends UnimplementedCard {
  constructor(game) {
    super(game, "Crux of Fate", "Fate Reforged", "FRF");
  }
}

module.exports = CruxofFate;
