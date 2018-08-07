"use strict";
const Constants = require ("../../../Constants");
const TimeVaultBase = require("../setVMA/TimeVault");

class TimeVault extends TimeVaultBase {
  constructor (game) {
    super(game, "Time Vault", "Limited Edition Beta", "LEB");
  }
}

module.exports = TimeVault;
