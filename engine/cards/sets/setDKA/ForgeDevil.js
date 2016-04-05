"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForgeDevil extends UnimplementedCard {
  constructor(game) {
    super(game, "Forge Devil", "Dark Ascension", "DKA");
  }
}

module.exports = ForgeDevil;
