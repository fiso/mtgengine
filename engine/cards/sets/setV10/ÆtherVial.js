"use strict";
const Constants = require ("../../../Constants");
const ÆtherVialBase = require("../setDST/ÆtherVial");

class ÆtherVial extends ÆtherVialBase {
  constructor(game) {
    super(game, "Æther Vial", "From the Vault: Relics", "V10");
  }
}

module.exports = ÆtherVial;
