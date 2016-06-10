"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamebornHellion extends UnimplementedCard {
  constructor (game) {
    super(game, "Flameborn Hellion", "Scars of Mirrodin", "SOM");
  }
}

module.exports = FlamebornHellion;
