"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CelestialDawn extends Card {
  constructor(game) {
    super(game, "Celestial Dawn", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CelestialDawn;
