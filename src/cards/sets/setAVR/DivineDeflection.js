"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineDeflection extends UnimplementedCard {
  constructor (game) {
    super(game, "Divine Deflection", "Avacyn Restored", "AVR");
  }
}

module.exports = DivineDeflection;
