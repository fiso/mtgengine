"use strict";
const Constants = require ("../../../Constants");
const AetherVialBase = require("../setDST/AetherVial");

class AetherVial extends AetherVialBase {
  constructor(game) {
    super(game, "Æther Vial", "From the Vault: Relics", "V10");
  }
}

module.exports = AetherVial;
