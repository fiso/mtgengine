"use strict";
const Constants = require ("../../../Constants");
const VesuvanShapeshifterBase = require("../setA25/VesuvanShapeshifter");

class VesuvanShapeshifter extends VesuvanShapeshifterBase {
  constructor (game) {
    super(game, "Vesuvan Shapeshifter", "Time Spiral", "TSP");
  }
}

module.exports = VesuvanShapeshifter;
