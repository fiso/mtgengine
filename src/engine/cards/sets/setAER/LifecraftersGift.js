"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifecraftersGift extends UnimplementedCard {
  constructor (game) {
    super(game, "Lifecrafter's Gift", "Aether Revolt", "AER");
  }
}

module.exports = LifecraftersGift;
