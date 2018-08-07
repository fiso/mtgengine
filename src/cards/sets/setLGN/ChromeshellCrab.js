"use strict";
const Constants = require ("../../../Constants");
const ChromeshellCrabBase = require("../setCMD/ChromeshellCrab");

class ChromeshellCrab extends ChromeshellCrabBase {
  constructor (game) {
    super(game, "Chromeshell Crab", "Legions", "LGN");
  }
}

module.exports = ChromeshellCrab;
