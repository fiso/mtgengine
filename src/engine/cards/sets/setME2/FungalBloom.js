"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FungalBloom extends UnimplementedCard {
  constructor (game) {
    super(game, "Fungal Bloom", "Masters Edition II", "ME2");
  }
}

module.exports = FungalBloom;
