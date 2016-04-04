"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LuxCannon extends Card {
  constructor(game) {
    super(game, "Lux Cannon", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LuxCannon;
