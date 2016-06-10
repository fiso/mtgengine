"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagneticMine extends UnimplementedCard {
  constructor (game) {
    super(game, "Magnetic Mine", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MagneticMine;
