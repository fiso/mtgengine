"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HonorGuardBase = require("../set8ED/HonorGuard.js");

class HonorGuard extends HonorGuardBase {
  constructor(game) {
    super(game, "Honor Guard", "Stronghold", "STH");
  }
}

module.exports = HonorGuard;
