"use strict";
const Constants = require ("../../../Constants");
const HonorGuardBase = require("../set8ED/HonorGuard");

class HonorGuard extends HonorGuardBase {
  constructor (game) {
    super(game, "Honor Guard", "Tenth Edition", "10E");
  }
}

module.exports = HonorGuard;
