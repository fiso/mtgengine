"use strict";
const Constants = require ("../../../Constants");
const TrinisphereBase = require("../setMPS/Trinisphere");

class Trinisphere extends TrinisphereBase {
  constructor (game) {
    super(game, "Trinisphere", "From the Vault: Exiled", "V09");
  }
}

module.exports = Trinisphere;
