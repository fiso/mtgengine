"use strict";
const Constants = require ("../../../Constants");
const LavaBurstBase = require("../setME2/LavaBurst");

class LavaBurst extends LavaBurstBase {
  constructor (game) {
    super(game, "Lava Burst", "Ice Age", "ICE");
  }
}

module.exports = LavaBurst;
