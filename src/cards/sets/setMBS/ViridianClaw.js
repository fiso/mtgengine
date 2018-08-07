"use strict";
const Constants = require ("../../../Constants");
const ViridianClawBase = require("../setTD2/ViridianClaw");

class ViridianClaw extends ViridianClawBase {
  constructor (game) {
    super(game, "Viridian Claw", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ViridianClaw;
