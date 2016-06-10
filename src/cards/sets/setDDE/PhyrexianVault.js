"use strict";
const Constants = require ("../../../Constants");
const PhyrexianVaultBase = require("../set6ED/PhyrexianVault");

class PhyrexianVault extends PhyrexianVaultBase {
  constructor (game) {
    super(game, "Phyrexian Vault", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianVault;
