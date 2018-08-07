"use strict";
const Constants = require ("../../../Constants");
const VaultSkirgeBase = require("../setNPH/VaultSkirge");

class VaultSkirge extends VaultSkirgeBase {
  constructor (game) {
    super(game, "Vault Skirge", "Wizards Play Network 2011", "PWP11");
  }
}

module.exports = VaultSkirge;
