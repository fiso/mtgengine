"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CelestialKirin extends Card {
  constructor(game) {
    super(game, "Celestial Kirin", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = CelestialKirin;
