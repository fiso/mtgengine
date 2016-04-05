"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeedStrangle extends UnimplementedCard {
  constructor(game) {
    super(game, "Weed Strangle", "Lorwyn", "LRW");
  }
}

module.exports = WeedStrangle;
