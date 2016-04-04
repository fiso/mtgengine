"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarriorsHonorBase = require("../setATH/WarriorsHonor.js");

class WarriorsHonor extends WarriorsHonorBase {
  constructor(game) {
    super(game, "Warrior's Honor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WarriorsHonor;
