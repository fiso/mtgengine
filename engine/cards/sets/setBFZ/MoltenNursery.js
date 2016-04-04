"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoltenNursery extends Card {
  constructor(game) {
    super(game, "Molten Nursery", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MoltenNursery;
