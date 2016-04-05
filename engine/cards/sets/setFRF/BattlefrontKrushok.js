"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlefrontKrushok extends UnimplementedCard {
  constructor(game) {
    super(game, "Battlefront Krushok", "Fate Reforged", "FRF");
  }
}

module.exports = BattlefrontKrushok;
