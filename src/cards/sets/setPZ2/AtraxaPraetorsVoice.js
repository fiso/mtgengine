"use strict";
const Constants = require ("../../../Constants");
const AtraxaPraetorsVoiceBase = require("../setCM2/AtraxaPraetorsVoice");

class AtraxaPraetorsVoice extends AtraxaPraetorsVoiceBase {
  constructor (game) {
    super(game, "Atraxa, Praetors' Voice", "You Make the Cube", "PZ2");
  }
}

module.exports = AtraxaPraetorsVoice;
