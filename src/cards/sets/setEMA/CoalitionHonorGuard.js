"use strict";
const Constants = require ("../../../Constants");
const CoalitionHonorGuardBase = require("../setAPC/CoalitionHonorGuard");

class CoalitionHonorGuard extends CoalitionHonorGuardBase {
  constructor (game) {
    super(game, "Coalition Honor Guard", "Eternal Masters", "EMA");
  }
}

module.exports = CoalitionHonorGuard;
