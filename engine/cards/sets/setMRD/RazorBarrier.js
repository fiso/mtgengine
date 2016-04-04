"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RazorBarrierBase = require("../setDDF/RazorBarrier.js");

class RazorBarrier extends RazorBarrierBase {
  constructor(game) {
    super(game, "Razor Barrier", "Mirrodin", "MRD");
  }
}

module.exports = RazorBarrier;
