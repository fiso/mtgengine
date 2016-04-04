"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeafArrow extends Card {
  constructor(game) {
    super(game, "Leaf Arrow", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LeafArrow;
