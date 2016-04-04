"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoundtheCall extends Card {
  constructor(game) {
    super(game, "Sound the Call", "Coldsnap", "CSP");
  }
}

module.exports = SoundtheCall;
