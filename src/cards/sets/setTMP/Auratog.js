"use strict";
const Constants = require ("../../../Constants");
const AuratogBase = require("../setTSB/Auratog");

class Auratog extends AuratogBase {
  constructor (game) {
    super(game, "Auratog", "Tempest", "TMP");
  }
}

module.exports = Auratog;
