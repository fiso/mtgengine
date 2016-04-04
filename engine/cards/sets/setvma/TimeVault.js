"use strict";
const Constants = require ("../../../Constants");
const TimeVaultBase = require("../setCED/TimeVault");

class TimeVault extends TimeVaultBase {
  constructor(game) {
    super(game, "Time Vault", "Vintage Masters", "VMA");
  }
}

module.exports = TimeVault;
