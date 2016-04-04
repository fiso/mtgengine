"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VaultSkirgeBase = require("../setNPH/VaultSkirge.js");

class VaultSkirge extends VaultSkirgeBase {
  constructor(game) {
    super(game, "Vault Skirge", "WPN and Gateway", "pWPN");
  }
}

module.exports = VaultSkirge;
