"use strict";
const Constants = require ("../../../Constants");
const AtraxaPraetorsVoiceBase = require("../setCM2/AtraxaPraetorsVoice");

class AtraxaPraetorsVoice extends AtraxaPraetorsVoiceBase {
  constructor (game) {
    super(game, "Atraxa, Praetors' Voice", "Commander 2016 Oversized", "OC16");
  }
}

module.exports = AtraxaPraetorsVoice;
