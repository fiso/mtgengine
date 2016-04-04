"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlabHammer extends Card {
  constructor(game) {
    super(game, "Slab Hammer", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SlabHammer;
