"use strict";
const Constants = require ("../../../Constants");
const BalefulForceBase = require("../setVMA/BalefulForce");

class BalefulForce extends BalefulForceBase {
  constructor (game) {
    super(game, "Baleful Force", "Commander 2013", "C13");
  }
}

module.exports = BalefulForce;
