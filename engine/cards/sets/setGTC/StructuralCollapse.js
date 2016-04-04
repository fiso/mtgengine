"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StructuralCollapse extends UnimplementedCard {
  constructor(game) {
    super(game, "Structural Collapse", "Gatecrash", "GTC");
  }
}

module.exports = StructuralCollapse;
