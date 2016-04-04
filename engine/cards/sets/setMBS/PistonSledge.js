"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PistonSledge extends Card {
  constructor(game) {
    super(game, "Piston Sledge", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PistonSledge;
