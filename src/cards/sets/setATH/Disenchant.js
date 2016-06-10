"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disenchant extends UnimplementedCard {
  constructor (game) {
    super(game, "Disenchant", "Anthologies", "ATH");
  }
}

module.exports = Disenchant;
