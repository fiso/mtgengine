"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialSword extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Sword", "Ice Age", "ICE");
  }
}

module.exports = CelestialSword;
