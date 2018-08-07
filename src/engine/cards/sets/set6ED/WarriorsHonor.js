"use strict";
const Constants = require ("../../../Constants");
const WarriorsHonorBase = require("../set10E/WarriorsHonor");

class WarriorsHonor extends WarriorsHonorBase {
  constructor (game) {
    super(game, "Warrior's Honor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WarriorsHonor;
