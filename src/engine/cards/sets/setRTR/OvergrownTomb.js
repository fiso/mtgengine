"use strict";
const Constants = require ("../../../Constants");
const OvergrownTombBase = require("../setEXP/OvergrownTomb");

class OvergrownTomb extends OvergrownTombBase {
  constructor (game) {
    super(game, "Overgrown Tomb", "Return to Ravnica", "RTR");
  }
}

module.exports = OvergrownTomb;
