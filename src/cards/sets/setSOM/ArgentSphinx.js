"use strict";
const Constants = require ("../../../Constants");
const ArgentSphinxBase = require("../setMM2/ArgentSphinx");

class ArgentSphinx extends ArgentSphinxBase {
  constructor(game) {
    super(game, "Argent Sphinx", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ArgentSphinx;
