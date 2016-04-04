"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulBarrierBase = require("../set5ED/SoulBarrier.js");

class SoulBarrier extends SoulBarrierBase {
  constructor(game) {
    super(game, "Soul Barrier", "Ice Age", "ICE");
  }
}

module.exports = SoulBarrier;
