"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagisterSphinxBase = require("../setARC/MagisterSphinx.js");

class MagisterSphinx extends MagisterSphinxBase {
  constructor(game) {
    super(game, "Magister Sphinx", "Conflux", "CON");
  }
}

module.exports = MagisterSphinx;
