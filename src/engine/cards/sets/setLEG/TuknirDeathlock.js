"use strict";
const Constants = require ("../../../Constants");
const TuknirDeathlockBase = require("../setME3/TuknirDeathlock");

class TuknirDeathlock extends TuknirDeathlockBase {
  constructor (game) {
    super(game, "Tuknir Deathlock", "Legends", "LEG");
  }
}

module.exports = TuknirDeathlock;
