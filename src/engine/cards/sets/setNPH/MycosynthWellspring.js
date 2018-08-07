"use strict";
const Constants = require ("../../../Constants");
const MycosynthWellspringBase = require("../setCM2/MycosynthWellspring");

class MycosynthWellspring extends MycosynthWellspringBase {
  constructor (game) {
    super(game, "Mycosynth Wellspring", "New Phyrexia", "NPH");
  }
}

module.exports = MycosynthWellspring;
