"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoltenSlagheap extends UnimplementedCard {
  constructor (game) {
    super(game, "Molten Slagheap", "Commander Anthology", "CMA");
  }
}

module.exports = MoltenSlagheap;
