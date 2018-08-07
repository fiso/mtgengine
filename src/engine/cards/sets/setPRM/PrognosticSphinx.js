"use strict";
const Constants = require ("../../../Constants");
const PrognosticSphinxBase = require("../setE01/PrognosticSphinx");

class PrognosticSphinx extends PrognosticSphinxBase {
  constructor (game) {
    super(game, "Prognostic Sphinx", "Magic Online Promos", "PRM");
  }
}

module.exports = PrognosticSphinx;
