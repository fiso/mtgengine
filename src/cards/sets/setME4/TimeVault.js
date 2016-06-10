"use strict";
const Constants = require ("../../../Constants");
const TimeVaultBase = require("../setCED/TimeVault");

class TimeVault extends TimeVaultBase {
  constructor (game) {
    super(game, "Time Vault", "Masters Edition IV", "ME4");
  }
}

module.exports = TimeVault;
