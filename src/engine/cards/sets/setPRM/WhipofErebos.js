"use strict";
const Constants = require ("../../../Constants");
const WhipofErebosBase = require("../setCP2/WhipofErebos");

class WhipofErebos extends WhipofErebosBase {
  constructor (game) {
    super(game, "Whip of Erebos", "Magic Online Promos", "PRM");
  }
}

module.exports = WhipofErebos;
