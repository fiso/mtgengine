"use strict";
const Constants = require ("../../../Constants");
const BalefulForceBase = require("../setC13/BalefulForce");

class BalefulForce extends BalefulForceBase {
  constructor (game) {
    super(game, "Baleful Force", "Vintage Masters", "VMA");
  }
}

module.exports = BalefulForce;
