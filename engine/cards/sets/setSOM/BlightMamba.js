"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlightMamba extends Card {
  constructor(game) {
    super(game, "Blight Mamba", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BlightMamba;
