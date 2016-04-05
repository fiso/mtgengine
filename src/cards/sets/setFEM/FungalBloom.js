"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FungalBloom extends UnimplementedCard {
  constructor(game) {
    super(game, "Fungal Bloom", "Fallen Empires", "FEM");
  }
}

module.exports = FungalBloom;
