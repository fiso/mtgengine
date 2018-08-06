"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TakeInventory extends UnimplementedCard {
  constructor (game) {
    super(game, "Take Inventory", "Eldritch Moon", "EMN");
  }
}

module.exports = TakeInventory;
