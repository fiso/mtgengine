"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrinisphereBase = require("../setDST/Trinisphere.js");

class Trinisphere extends TrinisphereBase {
  constructor(game) {
    super(game, "Trinisphere", "From the Vault: Exiled", "V09");
  }
}

module.exports = Trinisphere;
