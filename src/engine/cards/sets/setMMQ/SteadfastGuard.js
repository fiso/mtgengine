"use strict";
const Constants = require ("../../../Constants");
const SteadfastGuardBase = require("../set10E/SteadfastGuard");

class SteadfastGuard extends SteadfastGuardBase {
  constructor (game) {
    super(game, "Steadfast Guard", "Mercadian Masques", "MMQ");
  }
}

module.exports = SteadfastGuard;
