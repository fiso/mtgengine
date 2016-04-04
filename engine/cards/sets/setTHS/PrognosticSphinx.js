"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrognosticSphinxBase = require("../setCPK/PrognosticSphinx.js");

class PrognosticSphinx extends PrognosticSphinxBase {
  constructor(game) {
    super(game, "Prognostic Sphinx", "Theros", "THS");
  }
}

module.exports = PrognosticSphinx;
