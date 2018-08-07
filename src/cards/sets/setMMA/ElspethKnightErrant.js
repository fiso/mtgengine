"use strict";
const Constants = require ("../../../Constants");
const ElspethKnightErrantBase = require("../setMD1/ElspethKnightErrant");

class ElspethKnightErrant extends ElspethKnightErrantBase {
  constructor (game) {
    super(game, "Elspeth, Knight-Errant", "Modern Masters", "MMA");
  }
}

module.exports = ElspethKnightErrant;
