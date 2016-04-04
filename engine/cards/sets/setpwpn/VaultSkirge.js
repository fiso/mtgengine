"use strict";
const Constants = require ("../../../Constants");
const VaultSkirgeBase = require("../setNPH/VaultSkirge");

class VaultSkirge extends VaultSkirgeBase {
  constructor(game) {
    super(game, "Vault Skirge", "WPN and Gateway", "pWPN");
  }
}

module.exports = VaultSkirge;
