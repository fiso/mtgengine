"use strict";
const Constants = require ("../../../Constants");
const ConfluxBase = require("../setA25/Conflux");

class Conflux extends ConfluxBase {
  constructor (game) {
    super(game, "Conflux", "From the Vault: Lore", "V16");
  }
}

module.exports = Conflux;
