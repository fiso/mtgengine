"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TitanForge extends Card {
  constructor(game) {
    super(game, "Titan Forge", "Mirrodin Besieged", "MBS");
  }
}

module.exports = TitanForge;
