"use strict";
const Constants = require ("../../../Constants");
const LordofAtlantisBase = require("../setTSB/LordofAtlantis");

class LordofAtlantis extends LordofAtlantisBase {
  constructor (game) {
    super(game, "Lord of Atlantis", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = LordofAtlantis;
