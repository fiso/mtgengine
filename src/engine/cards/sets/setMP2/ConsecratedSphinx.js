"use strict";
const Constants = require ("../../../Constants");
const ConsecratedSphinxBase = require("../setIMA/ConsecratedSphinx");

class ConsecratedSphinx extends ConsecratedSphinxBase {
  constructor (game) {
    super(game, "Consecrated Sphinx", "Amonkhet Invocations", "MP2");
  }
}

module.exports = ConsecratedSphinx;
