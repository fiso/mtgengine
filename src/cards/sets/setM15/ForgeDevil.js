"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForgeDevil extends UnimplementedCard {
  constructor (game) {
    super(game, "Forge Devil", "Magic 2015", "M15");
  }
}

module.exports = ForgeDevil;
