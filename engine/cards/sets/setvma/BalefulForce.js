"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalefulForceBase = require("../setC13/BalefulForce.js");

class BalefulForce extends BalefulForceBase {
  constructor(game) {
    super(game, "Baleful Force", "Vintage Masters", "VMA");
  }
}

module.exports = BalefulForce;
