"use strict";
const Constants = require ("../../../Constants");
const SeanceBase = require("../setMM3/Seance");

class Seance extends SeanceBase {
  constructor (game) {
    super(game, "Séance", "Dark Ascension", "DKA");
  }
}

module.exports = Seance;
