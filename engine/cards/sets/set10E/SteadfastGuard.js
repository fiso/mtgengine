"use strict";
const Constants = require ("../../../Constants");
const SteadfastGuardBase = require("../setMMQ/SteadfastGuard");

class SteadfastGuard extends SteadfastGuardBase {
  constructor(game) {
    super(game, "Steadfast Guard", "Tenth Edition", "10E");
  }
}

module.exports = SteadfastGuard;
