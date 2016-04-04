"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MycosynthWellspringBase = require("../setC14/MycosynthWellspring.js");

class MycosynthWellspring extends MycosynthWellspringBase {
  constructor(game) {
    super(game, "Mycosynth Wellspring", "New Phyrexia", "NPH");
  }
}

module.exports = MycosynthWellspring;
