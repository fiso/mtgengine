"use strict";
const Constants = require ("../../../Constants");
const PetraSphinxBase = require("../setCHR/PetraSphinx");

class PetraSphinx extends PetraSphinxBase {
  constructor (game) {
    super(game, "Petra Sphinx", "Legends", "LEG");
  }
}

module.exports = PetraSphinx;
