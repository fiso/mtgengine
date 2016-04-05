"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistformMutant extends UnimplementedCard {
  constructor(game) {
    super(game, "Mistform Mutant", "Onslaught", "ONS");
  }
}

module.exports = MistformMutant;
