"use strict";
const Constants = require ("../../../Constants");
const LavaBurstBase = require("../setDKM/LavaBurst");

class LavaBurst extends LavaBurstBase {
  constructor (game) {
    super(game, "Lava Burst", "Masters Edition II", "ME2");
  }
}

module.exports = LavaBurst;
