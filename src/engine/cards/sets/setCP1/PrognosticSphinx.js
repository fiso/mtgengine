"use strict";
const Constants = require ("../../../Constants");
const PrognosticSphinxBase = require("../setE01/PrognosticSphinx");

class PrognosticSphinx extends PrognosticSphinxBase {
  constructor (game) {
    super(game, "Prognostic Sphinx", "Magic 2015 Clash Pack", "CP1");
  }
}

module.exports = PrognosticSphinx;
