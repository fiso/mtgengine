"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorobisWhisper extends UnimplementedCard {
  constructor(game) {
    super(game, "Horobi's Whisper", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HorobisWhisper;
