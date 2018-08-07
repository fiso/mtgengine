"use strict";
const Constants = require ("../../../Constants");
const ConundrumSphinxBase = require("../setC18/ConundrumSphinx");

class ConundrumSphinx extends ConundrumSphinxBase {
  constructor (game) {
    super(game, "Conundrum Sphinx", "Magic 2011", "M11");
  }
}

module.exports = ConundrumSphinx;
