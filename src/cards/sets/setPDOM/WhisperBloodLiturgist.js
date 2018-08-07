"use strict";
const Constants = require ("../../../Constants");
const WhisperBloodLiturgistBase = require("../setDOM/WhisperBloodLiturgist");

class WhisperBloodLiturgist extends WhisperBloodLiturgistBase {
  constructor (game) {
    super(game, "Whisper, Blood Liturgist", "Dominaria Promos", "PDOM");
  }
}

module.exports = WhisperBloodLiturgist;
