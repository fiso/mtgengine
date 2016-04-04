"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DryadMilitantBase = require("../setpMGD/DryadMilitant.js");

class DryadMilitant extends DryadMilitantBase {
  constructor(game) {
    super(game, "Dryad Militant", "Return to Ravnica", "RTR");
  }
}

module.exports = DryadMilitant;
