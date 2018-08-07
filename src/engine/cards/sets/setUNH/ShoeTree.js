"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShoeTree extends UnimplementedCard {
  constructor (game) {
    super(game, "Shoe Tree", "Unhinged", "UNH");
  }
}

module.exports = ShoeTree;
