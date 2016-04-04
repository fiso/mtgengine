"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PetraSphinxBase = require("../setCHR/PetraSphinx.js");

class PetraSphinx extends PetraSphinxBase {
  constructor(game) {
    super(game, "Petra Sphinx", "Legends", "LEG");
  }
}

module.exports = PetraSphinx;
