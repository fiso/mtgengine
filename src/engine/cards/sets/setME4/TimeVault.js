"use strict";
const Constants = require ("../../../Constants");
const TimeVaultBase = require("../setVMA/TimeVault");

class TimeVault extends TimeVaultBase {
  constructor (game) {
    super(game, "Time Vault", "Masters Edition IV", "ME4");
  }
}

module.exports = TimeVault;
