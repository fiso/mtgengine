"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InventorsApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Inventor's Apprentice", "Kaladesh", "KLD");
  }
}

module.exports = InventorsApprentice;
