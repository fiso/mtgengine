"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArgentSphinxBase = require("../setMM2/ArgentSphinx.js");

class ArgentSphinx extends ArgentSphinxBase {
  constructor(game) {
    super(game, "Argent Sphinx", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ArgentSphinx;
