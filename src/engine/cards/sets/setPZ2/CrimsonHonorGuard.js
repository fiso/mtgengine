"use strict";
const Constants = require ("../../../Constants");
const CrimsonHonorGuardBase = require("../setC17/CrimsonHonorGuard");

class CrimsonHonorGuard extends CrimsonHonorGuardBase {
  constructor (game) {
    super(game, "Crimson Honor Guard", "You Make the Cube", "PZ2");
  }
}

module.exports = CrimsonHonorGuard;
