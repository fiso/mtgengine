"use strict";
const Constants = require ("../../../Constants");
const SoulBarrierBase = require("../set5ED/SoulBarrier");

class SoulBarrier extends SoulBarrierBase {
  constructor (game) {
    super(game, "Soul Barrier", "Ice Age", "ICE");
  }
}

module.exports = SoulBarrier;
