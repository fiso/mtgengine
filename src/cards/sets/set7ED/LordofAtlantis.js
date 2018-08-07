"use strict";
const Constants = require ("../../../Constants");
const LordofAtlantisBase = require("../setTSB/LordofAtlantis");

class LordofAtlantis extends LordofAtlantisBase {
  constructor (game) {
    super(game, "Lord of Atlantis", "Seventh Edition", "7ED");
  }
}

module.exports = LordofAtlantis;
