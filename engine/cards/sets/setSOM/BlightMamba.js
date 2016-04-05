"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightMamba extends UnimplementedCard {
  constructor(game) {
    super(game, "Blight Mamba", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BlightMamba;
