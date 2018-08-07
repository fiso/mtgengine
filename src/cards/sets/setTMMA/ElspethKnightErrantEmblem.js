"use strict";
const Constants = require ("../../../Constants");
const ElspethKnightErrantEmblemBase = require("../setTMD1/ElspethKnightErrantEmblem");

class ElspethKnightErrantEmblem extends ElspethKnightErrantEmblemBase {
  constructor (game) {
    super(game, "Elspeth, Knight-Errant Emblem", "Modern Masters Tokens", "TMMA");
  }
}

module.exports = ElspethKnightErrantEmblem;
