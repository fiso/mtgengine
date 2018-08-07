"use strict";
const Constants = require ("../../../Constants");
const PlatinumAngelBase = require("../setMPS/PlatinumAngel");

class PlatinumAngel extends PlatinumAngelBase {
  constructor (game) {
    super(game, "Platinum Angel", "From the Vault: Angels", "V15");
  }
}

module.exports = PlatinumAngel;
