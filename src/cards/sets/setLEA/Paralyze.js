"use strict";
const Constants = require ("../../../Constants");
const ParalyzeBase = require("../setCED/Paralyze");

class Paralyze extends ParalyzeBase {
  constructor (game) {
    super(game, "Paralyze", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Paralyze;
