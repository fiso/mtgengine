"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialCrusader extends UnimplementedCard {
  constructor(game) {
    super(game, "Celestial Crusader", "Commander 2014", "C14");
  }
}

module.exports = CelestialCrusader;
