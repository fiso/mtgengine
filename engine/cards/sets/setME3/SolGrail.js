"use strict";
const Constants = require ("../../../Constants");
const SolGrailBase = require("../setALL/SolGrail");

class SolGrail extends SolGrailBase {
  constructor(game) {
    super(game, "Sol Grail", "Masters Edition III", "ME3");
  }
}

module.exports = SolGrail;
