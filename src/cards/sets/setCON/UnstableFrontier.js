"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnstableFrontier extends UnimplementedCard {
  constructor(game) {
    super(game, "Unstable Frontier", "Conflux", "CON");
  }
}

module.exports = UnstableFrontier;
