"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialSword extends UnimplementedCard {
  constructor (game) {
    super(game, "Celestial Sword", "Masters Edition IV", "ME4");
  }
}

module.exports = CelestialSword;
