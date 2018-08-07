"use strict";
const Constants = require ("../../../Constants");
const PetraSphinxBase = require("../setMED/PetraSphinx");

class PetraSphinx extends PetraSphinxBase {
  constructor (game) {
    super(game, "Petra Sphinx", "Chronicles", "CHR");
  }
}

module.exports = PetraSphinx;
