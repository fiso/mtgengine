"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElementalResonance extends UnimplementedCard {
  constructor(game) {
    super(game, "Elemental Resonance", "Dissension", "DIS");
  }
}

module.exports = ElementalResonance;
