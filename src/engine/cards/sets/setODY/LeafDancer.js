"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeafDancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Leaf Dancer", "Odyssey", "ODY");
  }
}

module.exports = LeafDancer;
