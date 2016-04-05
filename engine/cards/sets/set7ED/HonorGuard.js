"use strict";
const Constants = require ("../../../Constants");
const HonorGuardBase = require("../set8ED/HonorGuard");

class HonorGuard extends HonorGuardBase {
  constructor(game) {
    super(game, "Honor Guard", "Seventh Edition", "7ED");
  }
}

module.exports = HonorGuard;
