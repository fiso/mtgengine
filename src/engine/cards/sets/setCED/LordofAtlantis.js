"use strict";
const Constants = require ("../../../Constants");
const LordofAtlantisBase = require("../setTSB/LordofAtlantis");

class LordofAtlantis extends LordofAtlantisBase {
  constructor (game) {
    super(game, "Lord of Atlantis", "Collectors’ Edition", "CED");
  }
}

module.exports = LordofAtlantis;
