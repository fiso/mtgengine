"use strict";
const Constants = require ("../../../Constants");
const VoiceofResurgenceBase = require("../setMM3/VoiceofResurgence");

class VoiceofResurgence extends VoiceofResurgenceBase {
  constructor (game) {
    super(game, "Voice of Resurgence", "Dragon's Maze", "DGM");
  }
}

module.exports = VoiceofResurgence;
