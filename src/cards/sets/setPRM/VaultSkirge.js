"use strict";
const Constants = require ("../../../Constants");
const VaultSkirgeBase = require("../setNPH/VaultSkirge");

class VaultSkirge extends VaultSkirgeBase {
  constructor (game) {
    super(game, "Vault Skirge", "Magic Online Promos", "PRM");
  }
}

module.exports = VaultSkirge;
