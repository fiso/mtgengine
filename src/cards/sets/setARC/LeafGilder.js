"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeafGilder extends UnimplementedCard {
  constructor(game) {
    super(game, "Leaf Gilder", "Archenemy", "ARC");
  }
}

module.exports = LeafGilder;
