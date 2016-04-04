"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeafGilder extends Card {
  constructor(game) {
    super(game, "Leaf Gilder", "Archenemy", "ARC");
  }
}

module.exports = LeafGilder;
