"use strict";
const Constants = require ("../../../Constants");
const TimeVaultBase = require("../setCED/TimeVault");

class TimeVault extends TimeVaultBase {
  constructor(game) {
    super(game, "Time Vault", "Unlimited Edition", "2ED");
  }
}

module.exports = TimeVault;
