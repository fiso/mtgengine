"use strict";
const Constants = require ("../../../Constants");
const BearerofSilenceBase = require("../setOGW/BearerofSilence");

class BearerofSilence extends BearerofSilenceBase {
  constructor (game) {
    super(game, "Bearer of Silence", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = BearerofSilence;
