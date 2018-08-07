"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disenchant extends UnimplementedCard {
  constructor (game) {
    super(game, "Disenchant", "Masters 25", "A25");
  }
}

module.exports = Disenchant;
