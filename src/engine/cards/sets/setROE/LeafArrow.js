"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeafArrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Leaf Arrow", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LeafArrow;
