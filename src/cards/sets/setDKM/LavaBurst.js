"use strict";
const Constants = require ("../../../Constants");
const LavaBurstBase = require("../setME2/LavaBurst");

class LavaBurst extends LavaBurstBase {
  constructor (game) {
    super(game, "Lava Burst", "Deckmasters", "DKM");
  }
}

module.exports = LavaBurst;
