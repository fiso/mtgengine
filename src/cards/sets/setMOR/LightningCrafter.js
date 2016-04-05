"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningCrafter extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightning Crafter", "Morningtide", "MOR");
  }
}

module.exports = LightningCrafter;
