"use strict";
const Constants = require ("../../../Constants");
const VaultoftheArchangelBase = require("../setMD1/VaultoftheArchangel");

class VaultoftheArchangel extends VaultoftheArchangelBase {
  constructor (game) {
    super(game, "Vault of the Archangel", "Dark Ascension", "DKA");
  }
}

module.exports = VaultoftheArchangel;
