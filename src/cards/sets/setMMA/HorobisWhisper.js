"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorobisWhisper extends UnimplementedCard {
  constructor (game) {
    super(game, "Horobi's Whisper", "Modern Masters", "MMA");
  }
}

module.exports = HorobisWhisper;
