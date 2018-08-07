"use strict";
const Constants = require ("../../../Constants");
const NamelessInversionBase = require("../setMM2/NamelessInversion");

class NamelessInversion extends NamelessInversionBase {
  constructor (game) {
    super(game, "Nameless Inversion", "Magic Online Promos", "PRM");
  }
}

module.exports = NamelessInversion;
