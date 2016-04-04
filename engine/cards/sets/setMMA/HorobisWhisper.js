"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HorobisWhisperBase = require("../setBOK/HorobisWhisper.js");

class HorobisWhisper extends HorobisWhisperBase {
  constructor(game) {
    super(game, "Horobi's Whisper", "Modern Masters", "MMA");
  }
}

module.exports = HorobisWhisper;
