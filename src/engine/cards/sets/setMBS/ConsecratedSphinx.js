"use strict";
const Constants = require ("../../../Constants");
const ConsecratedSphinxBase = require("../setIMA/ConsecratedSphinx");

class ConsecratedSphinx extends ConsecratedSphinxBase {
  constructor (game) {
    super(game, "Consecrated Sphinx", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ConsecratedSphinx;
