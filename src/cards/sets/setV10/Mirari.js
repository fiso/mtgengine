"use strict";
const Constants = require ("../../../Constants");
const MirariBase = require("../setC13/Mirari");

class Mirari extends MirariBase {
  constructor (game) {
    super(game, "Mirari", "From the Vault: Relics", "V10");
  }
}

module.exports = Mirari;
