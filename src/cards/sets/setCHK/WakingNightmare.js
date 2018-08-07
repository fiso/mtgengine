"use strict";
const Constants = require ("../../../Constants");
const WakingNightmareBase = require("../setMM2/WakingNightmare");

class WakingNightmare extends WakingNightmareBase {
  constructor (game) {
    super(game, "Waking Nightmare", "Champions of Kamigawa", "CHK");
  }
}

module.exports = WakingNightmare;
