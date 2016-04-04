"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StructuralCollapse extends Card {
  constructor(game) {
    super(game, "Structural Collapse", "Gatecrash", "GTC");
  }
}

module.exports = StructuralCollapse;
