"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningShrieker extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightning Shrieker", "Fate Reforged", "FRF");
  }
}

module.exports = LightningShrieker;
