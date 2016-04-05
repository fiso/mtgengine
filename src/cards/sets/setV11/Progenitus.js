"use strict";
const Constants = require ("../../../Constants");
const ProgenitusBase = require("../setCON/Progenitus");

class Progenitus extends ProgenitusBase {
  constructor(game) {
    super(game, "Progenitus", "From the Vault: Legends", "V11");
  }
}

module.exports = Progenitus;
