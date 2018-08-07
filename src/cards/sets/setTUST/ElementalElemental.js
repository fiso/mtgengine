"use strict";
const Constants = require ("../../../Constants");
const ElementalElementalBase = require("../setTUST/ElementalElemental");

class ElementalElemental extends ElementalElementalBase {
  constructor (game) {
    super(game, "Elemental // Elemental", "Unstable Tokens", "TUST");
  }
}

module.exports = ElementalElemental;
