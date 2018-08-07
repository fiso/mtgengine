"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FungalShambler extends UnimplementedCard {
  constructor (game) {
    super(game, "Fungal Shambler", "Magic Online Promos", "PRM");
  }
}

module.exports = FungalShambler;
