"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesSpiral extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature's Spiral", "Dominaria", "DOM");
  }
}

module.exports = NaturesSpiral;
