"use strict";
const Constants = require ("../../../Constants");
const HorobisWhisperBase = require("../setMMA/HorobisWhisper");

class HorobisWhisper extends HorobisWhisperBase {
  constructor (game) {
    super(game, "Horobi's Whisper", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HorobisWhisper;
