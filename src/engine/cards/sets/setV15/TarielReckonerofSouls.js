"use strict";
const Constants = require ("../../../Constants");
const TarielReckonerofSoulsBase = require("../setCMA/TarielReckonerofSouls");

class TarielReckonerofSouls extends TarielReckonerofSoulsBase {
  constructor (game) {
    super(game, "Tariel, Reckoner of Souls", "From the Vault: Angels", "V15");
  }
}

module.exports = TarielReckonerofSouls;
