"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarrenWeirding extends UnimplementedCard {
  constructor(game) {
    super(game, "Warren Weirding", "Modern Masters", "MMA");
  }
}

module.exports = WarrenWeirding;
