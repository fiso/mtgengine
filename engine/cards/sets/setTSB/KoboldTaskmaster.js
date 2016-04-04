"use strict";
const Constants = require ("../../../Constants");
const KoboldTaskmasterBase = require("../setLEG/KoboldTaskmaster");

class KoboldTaskmaster extends KoboldTaskmasterBase {
  constructor(game) {
    super(game, "Kobold Taskmaster", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = KoboldTaskmaster;
