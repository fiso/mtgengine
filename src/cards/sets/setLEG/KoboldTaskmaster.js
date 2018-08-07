"use strict";
const Constants = require ("../../../Constants");
const KoboldTaskmasterBase = require("../setME3/KoboldTaskmaster");

class KoboldTaskmaster extends KoboldTaskmasterBase {
  constructor (game) {
    super(game, "Kobold Taskmaster", "Legends", "LEG");
  }
}

module.exports = KoboldTaskmaster;
