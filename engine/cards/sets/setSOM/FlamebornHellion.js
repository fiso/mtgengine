"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlamebornHellion extends Card {
  constructor(game) {
    super(game, "Flameborn Hellion", "Scars of Mirrodin", "SOM");
  }
}

module.exports = FlamebornHellion;
