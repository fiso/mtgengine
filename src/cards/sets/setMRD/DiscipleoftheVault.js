"use strict";
const Constants = require ("../../../Constants");
const DiscipleoftheVaultBase = require("../setWC04/DiscipleoftheVault");

class DiscipleoftheVault extends DiscipleoftheVaultBase {
  constructor (game) {
    super(game, "Disciple of the Vault", "Mirrodin", "MRD");
  }
}

module.exports = DiscipleoftheVault;
