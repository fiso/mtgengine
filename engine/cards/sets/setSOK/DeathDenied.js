"use strict";
const Constants = require ("../../../Constants");
const DeathDeniedBase = require("../setMMA/DeathDenied");

class DeathDenied extends DeathDeniedBase {
  constructor(game) {
    super(game, "Death Denied", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = DeathDenied;
