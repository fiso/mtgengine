"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HonorGuardBase = require("../set8ED/HonorGuard.js");

class HonorGuard extends HonorGuardBase {
  constructor(game) {
    super(game, "Honor Guard", "Ninth Edition", "9ED");
  }
}

module.exports = HonorGuard;
