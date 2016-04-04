"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianVaultBase = require("../set6ED/PhyrexianVault.js");

class PhyrexianVault extends PhyrexianVaultBase {
  constructor(game) {
    super(game, "Phyrexian Vault", "Mirage", "MIR");
  }
}

module.exports = PhyrexianVault;
