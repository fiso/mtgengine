"use strict";
const Constants = require ("../../../Constants");
const ConundrumSphinxBase = require("../setC18/ConundrumSphinx");

class ConundrumSphinx extends ConundrumSphinxBase {
  constructor (game) {
    super(game, "Conundrum Sphinx", "Commander 2011", "CMD");
  }
}

module.exports = ConundrumSphinx;
