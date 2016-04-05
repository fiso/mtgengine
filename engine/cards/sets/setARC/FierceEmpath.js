"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FierceEmpath extends UnimplementedCard {
  constructor(game) {
    super(game, "Fierce Empath", "Archenemy", "ARC");
  }
}

module.exports = FierceEmpath;
