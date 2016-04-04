"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HorobisWhisper extends Card {
  constructor(game) {
    super(game, "Horobi's Whisper", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HorobisWhisper;
