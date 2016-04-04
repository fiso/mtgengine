"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlabHammer extends UnimplementedCard {
  constructor(game) {
    super(game, "Slab Hammer", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SlabHammer;
