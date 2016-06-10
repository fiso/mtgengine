"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IngotChewer extends UnimplementedCard {
  constructor (game) {
    super(game, "Ingot Chewer", "Commander 2014", "C14");
  }
}

module.exports = IngotChewer;
