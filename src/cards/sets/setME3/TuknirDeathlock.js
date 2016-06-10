"use strict";
const Constants = require ("../../../Constants");
const TuknirDeathlockBase = require("../setLEG/TuknirDeathlock");

class TuknirDeathlock extends TuknirDeathlockBase {
  constructor (game) {
    super(game, "Tuknir Deathlock", "Masters Edition III", "ME3");
  }
}

module.exports = TuknirDeathlock;
