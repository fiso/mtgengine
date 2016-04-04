"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ringskipper extends UnimplementedCard {
  constructor(game) {
    super(game, "Ringskipper", "Lorwyn", "LRW");
  }
}

module.exports = Ringskipper;
