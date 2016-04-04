"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FusionElemental extends Card {
  constructor(game) {
    super(game, "Fusion Elemental", "Conflux", "CON");
  }
}

module.exports = FusionElemental;
