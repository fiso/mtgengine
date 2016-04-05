"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoundtheCall extends UnimplementedCard {
  constructor(game) {
    super(game, "Sound the Call", "Coldsnap", "CSP");
  }
}

module.exports = SoundtheCall;
