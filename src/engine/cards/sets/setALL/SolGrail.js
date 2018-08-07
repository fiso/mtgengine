"use strict";
const Constants = require ("../../../Constants");
const SolGrailBase = require("../setME3/SolGrail");

class SolGrail extends SolGrailBase {
  constructor (game) {
    super(game, "Sol Grail", "Alliances", "ALL");
  }
}

module.exports = SolGrail;
