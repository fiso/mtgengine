"use strict";
const Constants = require ("../../../Constants");
const HorobisWhisperBase = require("../setBOK/HorobisWhisper");

class HorobisWhisper extends HorobisWhisperBase {
  constructor(game) {
    super(game, "Horobi's Whisper", "Modern Masters", "MMA");
  }
}

module.exports = HorobisWhisper;
