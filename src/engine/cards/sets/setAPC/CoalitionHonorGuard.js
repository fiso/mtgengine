"use strict";
const Constants = require ("../../../Constants");
const CoalitionHonorGuardBase = require("../setEMA/CoalitionHonorGuard");

class CoalitionHonorGuard extends CoalitionHonorGuardBase {
  constructor (game) {
    super(game, "Coalition Honor Guard", "Apocalypse", "APC");
  }
}

module.exports = CoalitionHonorGuard;
