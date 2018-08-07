"use strict";
const Constants = require ("../../../Constants");
const ProgenitusBase = require("../setMMA/Progenitus");

class Progenitus extends ProgenitusBase {
  constructor (game) {
    super(game, "Progenitus", "From the Vault: Legends", "V11");
  }
}

module.exports = Progenitus;
