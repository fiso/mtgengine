"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PistonSledge extends UnimplementedCard {
  constructor(game) {
    super(game, "Piston Sledge", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PistonSledge;
