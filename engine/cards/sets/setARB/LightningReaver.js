"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningReaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightning Reaver", "Alara Reborn", "ARB");
  }
}

module.exports = LightningReaver;
