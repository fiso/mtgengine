"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DivineDeflection extends Card {
  constructor(game) {
    super(game, "Divine Deflection", "Avacyn Restored", "AVR");
  }
}

module.exports = DivineDeflection;
