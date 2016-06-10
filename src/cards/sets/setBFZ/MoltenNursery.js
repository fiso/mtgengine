"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoltenNursery extends UnimplementedCard {
  constructor (game) {
    super(game, "Molten Nursery", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MoltenNursery;
