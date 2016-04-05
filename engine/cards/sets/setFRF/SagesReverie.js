"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SagesReverie extends UnimplementedCard {
  constructor(game) {
    super(game, "Sage's Reverie", "Fate Reforged", "FRF");
  }
}

module.exports = SagesReverie;
