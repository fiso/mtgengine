"use strict";
const Constants = require ("../../../Constants");
const OraclesVaultBase = require("../setAKH/OraclesVault");

class OraclesVault extends OraclesVaultBase {
  constructor (game) {
    super(game, "Oracle's Vault", "Amonkhet Promos", "PAKH");
  }
}

module.exports = OraclesVault;
