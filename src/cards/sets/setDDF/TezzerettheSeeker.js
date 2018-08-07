"use strict";
const Constants = require ("../../../Constants");
const TezzerettheSeekerBase = require("../setMM2/TezzerettheSeeker");

class TezzerettheSeeker extends TezzerettheSeekerBase {
  constructor (game) {
    super(game, "Tezzeret the Seeker", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = TezzerettheSeeker;
