"use strict";
const Constants = require ("../../../Constants");
const MagisterSphinxBase = require("../setARC/MagisterSphinx");

class MagisterSphinx extends MagisterSphinxBase {
  constructor(game) {
    super(game, "Magister Sphinx", "Conflux", "CON");
  }
}

module.exports = MagisterSphinx;
