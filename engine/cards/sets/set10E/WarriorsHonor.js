"use strict";
const Constants = require ("../../../Constants");
const WarriorsHonorBase = require("../setATH/WarriorsHonor");

class WarriorsHonor extends WarriorsHonorBase {
  constructor(game) {
    super(game, "Warrior's Honor", "Tenth Edition", "10E");
  }
}

module.exports = WarriorsHonor;
