"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CreepingCorrosion extends UnimplementedCard {
  constructor (game) {
    super(game, "Creeping Corrosion", "Mirrodin Besieged", "MBS");
  }
}

module.exports = CreepingCorrosion;
