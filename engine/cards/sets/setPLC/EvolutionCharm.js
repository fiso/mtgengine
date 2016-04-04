"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EvolutionCharm extends Card {
  constructor(game) {
    super(game, "Evolution Charm", "Planar Chaos", "PLC");
  }
}

module.exports = EvolutionCharm;
