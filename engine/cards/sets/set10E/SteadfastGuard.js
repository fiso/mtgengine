"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SteadfastGuardBase = require("../setMMQ/SteadfastGuard.js");

class SteadfastGuard extends SteadfastGuardBase {
  constructor(game) {
    super(game, "Steadfast Guard", "Tenth Edition", "10E");
  }
}

module.exports = SteadfastGuard;
