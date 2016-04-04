"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CelestialAncient extends Card {
  constructor(game) {
    super(game, "Celestial Ancient", "Commander 2015", "C15");
  }
}

module.exports = CelestialAncient;
