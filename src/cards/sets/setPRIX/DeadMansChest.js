"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadMansChest extends UnimplementedCard {
  constructor (game) {
    super(game, "Dead Man's Chest", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = DeadMansChest;
