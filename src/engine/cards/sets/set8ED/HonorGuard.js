"use strict";
const Constants = require ("../../../Constants");
const HonorGuardBase = require("../set10E/HonorGuard");

class HonorGuard extends HonorGuardBase {
  constructor (game) {
    super(game, "Honor Guard", "Eighth Edition", "8ED");
  }
}

module.exports = HonorGuard;
