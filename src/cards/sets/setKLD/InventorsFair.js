"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InventorsFair extends UnimplementedCard {
  constructor (game) {
    super(game, "Inventors' Fair", "Kaladesh", "KLD");
  }
}

module.exports = InventorsFair;
