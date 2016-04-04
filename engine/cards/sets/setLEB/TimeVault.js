"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimeVaultBase = require("../setCED/TimeVault.js");

class TimeVault extends TimeVaultBase {
  constructor(game) {
    super(game, "Time Vault", "Limited Edition Beta", "LEB");
  }
}

module.exports = TimeVault;
