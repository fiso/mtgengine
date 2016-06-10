"use strict";
const Constants = require ("../../../Constants");
const KirdApeBase = require("../setARN/KirdApe");

class KirdApe extends KirdApeBase {
  constructor (game) {
    super(game, "Kird Ape", "From the Vault: Exiled", "V09");
  }
}

module.exports = KirdApe;
