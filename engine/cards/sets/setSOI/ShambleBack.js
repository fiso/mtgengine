"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShambleBack extends UnimplementedCard {
  constructor(game) {
    super(game, "Shamble Back", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ShambleBack;
