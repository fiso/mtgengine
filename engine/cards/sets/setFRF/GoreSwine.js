"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoreSwine extends UnimplementedCard {
  constructor(game) {
    super(game, "Gore Swine", "Fate Reforged", "FRF");
  }
}

module.exports = GoreSwine;
