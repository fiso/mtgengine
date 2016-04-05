"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PleaforGuidance extends UnimplementedCard {
  constructor(game) {
    super(game, "Plea for Guidance", "Born of the Gods", "BNG");
  }
}

module.exports = PleaforGuidance;
