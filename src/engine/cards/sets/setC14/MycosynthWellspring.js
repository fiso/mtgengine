"use strict";
const Constants = require ("../../../Constants");
const MycosynthWellspringBase = require("../setCM2/MycosynthWellspring");

class MycosynthWellspring extends MycosynthWellspringBase {
  constructor (game) {
    super(game, "Mycosynth Wellspring", "Commander 2014", "C14");
  }
}

module.exports = MycosynthWellspring;
