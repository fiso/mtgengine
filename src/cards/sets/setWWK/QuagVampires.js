"use strict";
const Constants = require ("../../../Constants");
const QuagVampiresBase = require("../setCNS/QuagVampires");

class QuagVampires extends QuagVampiresBase {
  constructor (game) {
    super(game, "Quag Vampires", "Worldwake", "WWK");
  }
}

module.exports = QuagVampires;
