"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConstantMists extends UnimplementedCard {
  constructor (game) {
    super(game, "Constant Mists", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = ConstantMists;
