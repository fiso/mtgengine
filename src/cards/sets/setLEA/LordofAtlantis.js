"use strict";
const Constants = require ("../../../Constants");
const LordofAtlantisBase = require("../setTSB/LordofAtlantis");

class LordofAtlantis extends LordofAtlantisBase {
  constructor (game) {
    super(game, "Lord of Atlantis", "Limited Edition Alpha", "LEA");
  }
}

module.exports = LordofAtlantis;
