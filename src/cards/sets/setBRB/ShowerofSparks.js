"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShowerofSparks extends UnimplementedCard {
  constructor (game) {
    super(game, "Shower of Sparks", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ShowerofSparks;
