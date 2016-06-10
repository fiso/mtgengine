"use strict";
const Constants = require ("../../../Constants");
const TrinisphereBase = require("../setDST/Trinisphere");

class Trinisphere extends TrinisphereBase {
  constructor (game) {
    super(game, "Trinisphere", "From the Vault: Exiled", "V09");
  }
}

module.exports = Trinisphere;
