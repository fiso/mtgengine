"use strict";
const Constants = require ("../../../Constants");
const WhelmingWaveBase = require("../setBNG/WhelmingWave");

class WhelmingWave extends WhelmingWaveBase {
  constructor(game) {
    super(game, "Whelming Wave", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = WhelmingWave;
