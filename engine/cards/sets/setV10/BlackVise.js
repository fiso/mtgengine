"use strict";
const Constants = require ("../../../Constants");
const BlackViseBase = require("../setCED/BlackVise");

class BlackVise extends BlackViseBase {
  constructor(game) {
    super(game, "Black Vise", "From the Vault: Relics", "V10");
  }
}

module.exports = BlackVise;
