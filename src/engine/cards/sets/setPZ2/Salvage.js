"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Salvage extends UnimplementedCard {
  constructor (game) {
    super(game, "Salvage", "You Make the Cube", "PZ2");
  }
}

module.exports = Salvage;
