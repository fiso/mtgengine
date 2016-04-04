"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvolutionCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Evolution Charm", "Planar Chaos", "PLC");
  }
}

module.exports = EvolutionCharm;
