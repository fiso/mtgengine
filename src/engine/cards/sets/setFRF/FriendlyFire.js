"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FriendlyFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Friendly Fire", "Fate Reforged", "FRF");
  }
}

module.exports = FriendlyFire;
