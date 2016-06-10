"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagneticMountain extends UnimplementedCard {
  constructor (game) {
    super(game, "Magnetic Mountain", "Arabian Nights", "ARN");
  }
}

module.exports = MagneticMountain;
