"use strict";
const Constants = require ("../../../Constants");
const SlumReaperBase = require("../setBBD/SlumReaper");

class SlumReaper extends SlumReaperBase {
  constructor (game) {
    super(game, "Slum Reaper", "Return to Ravnica", "RTR");
  }
}

module.exports = SlumReaper;
