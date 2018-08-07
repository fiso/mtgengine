"use strict";
const Constants = require ("../../../Constants");
const NamelessInversionBase = require("../setMM2/NamelessInversion");

class NamelessInversion extends NamelessInversionBase {
  constructor (game) {
    super(game, "Nameless Inversion", "Lorwyn", "LRW");
  }
}

module.exports = NamelessInversion;
