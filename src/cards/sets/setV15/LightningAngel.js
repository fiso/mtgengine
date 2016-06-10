"use strict";
const Constants = require ("../../../Constants");
const LightningAngelBase = require("../setAPC/LightningAngel");

class LightningAngel extends LightningAngelBase {
  constructor (game) {
    super(game, "Lightning Angel", "From the Vault: Angels", "V15");
  }
}

module.exports = LightningAngel;
