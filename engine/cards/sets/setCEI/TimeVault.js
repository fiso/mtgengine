"use strict";
const Constants = require ("../../../Constants");
const TimeVaultBase = require("../setCED/TimeVault");

class TimeVault extends TimeVaultBase {
  constructor(game) {
    super(game, "Time Vault", "International Collector's Edition", "CEI");
  }
}

module.exports = TimeVault;
