"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Metamorphose extends UnimplementedCard {
  constructor(game) {
    super(game, "Metamorphose", "Scourge", "SCG");
  }
}

module.exports = Metamorphose;
