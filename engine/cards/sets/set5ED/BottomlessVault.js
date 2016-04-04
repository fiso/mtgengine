"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BottomlessVaultBase = require("../setFEM/BottomlessVault.js");

class BottomlessVault extends BottomlessVaultBase {
  constructor(game) {
    super(game, "Bottomless Vault", "Fifth Edition", "5ED");
  }
}

module.exports = BottomlessVault;
