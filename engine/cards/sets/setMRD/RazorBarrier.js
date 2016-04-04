"use strict";
const Constants = require ("../../../Constants");
const RazorBarrierBase = require("../setDDF/RazorBarrier");

class RazorBarrier extends RazorBarrierBase {
  constructor(game) {
    super(game, "Razor Barrier", "Mirrodin", "MRD");
  }
}

module.exports = RazorBarrier;
