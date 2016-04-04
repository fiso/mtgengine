"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CreepingCorrosion extends Card {
  constructor(game) {
    super(game, "Creeping Corrosion", "Mirrodin Besieged", "MBS");
  }
}

module.exports = CreepingCorrosion;
