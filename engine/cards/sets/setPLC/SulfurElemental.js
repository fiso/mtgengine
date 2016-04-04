"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SulfurElemental extends Card {
  constructor(game) {
    super(game, "Sulfur Elemental", "Planar Chaos", "PLC");
  }
}

module.exports = SulfurElemental;
