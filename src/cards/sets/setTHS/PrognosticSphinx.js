"use strict";
const Constants = require ("../../../Constants");
const PrognosticSphinxBase = require("../setCPK/PrognosticSphinx");

class PrognosticSphinx extends PrognosticSphinxBase {
  constructor (game) {
    super(game, "Prognostic Sphinx", "Theros", "THS");
  }
}

module.exports = PrognosticSphinx;
