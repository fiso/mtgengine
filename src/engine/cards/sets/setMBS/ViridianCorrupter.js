"use strict";
const Constants = require ("../../../Constants");
const ViridianCorrupterBase = require("../setTD2/ViridianCorrupter");

class ViridianCorrupter extends ViridianCorrupterBase {
  constructor (game) {
    super(game, "Viridian Corrupter", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ViridianCorrupter;
