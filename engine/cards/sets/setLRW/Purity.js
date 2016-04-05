"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Purity extends UnimplementedCard {
  constructor(game) {
    super(game, "Purity", "Lorwyn", "LRW");
  }
}

module.exports = Purity;
