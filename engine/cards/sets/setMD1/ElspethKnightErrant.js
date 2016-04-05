"use strict";
const Constants = require ("../../../Constants");
const ElspethKnightErrantBase = require("../setDDF/ElspethKnightErrant");

class ElspethKnightErrant extends ElspethKnightErrantBase {
  constructor(game) {
    super(game, "Elspeth, Knight-Errant", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = ElspethKnightErrant;
