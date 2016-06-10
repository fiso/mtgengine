"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RageReflection extends UnimplementedCard {
  constructor (game) {
    super(game, "Rage Reflection", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = RageReflection;
