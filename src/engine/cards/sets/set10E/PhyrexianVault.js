"use strict";
const Constants = require ("../../../Constants");
const PhyrexianVaultBase = require("../setDDE/PhyrexianVault");

class PhyrexianVault extends PhyrexianVaultBase {
  constructor (game) {
    super(game, "Phyrexian Vault", "Tenth Edition", "10E");
  }
}

module.exports = PhyrexianVault;
