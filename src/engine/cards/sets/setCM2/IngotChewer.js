"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IngotChewer extends UnimplementedCard {
  constructor (game) {
    super(game, "Ingot Chewer", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = IngotChewer;
