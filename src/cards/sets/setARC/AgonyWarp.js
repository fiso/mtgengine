"use strict";
const Constants = require ("../../../Constants");
const AgonyWarpBase = require("../setMM3/AgonyWarp");

class AgonyWarp extends AgonyWarpBase {
  constructor (game) {
    super(game, "Agony Warp", "Archenemy", "ARC");
  }
}

module.exports = AgonyWarp;
