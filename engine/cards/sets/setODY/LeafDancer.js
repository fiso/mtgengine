"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeafDancer extends Card {
  constructor(game) {
    super(game, "Leaf Dancer", "Odyssey", "ODY");
  }
}

module.exports = LeafDancer;
