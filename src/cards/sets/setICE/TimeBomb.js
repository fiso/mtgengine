"use strict";
const Constants = require ("../../../Constants");
const TimeBombBase = require("../set5ED/TimeBomb");

class TimeBomb extends TimeBombBase {
  constructor (game) {
    super(game, "Time Bomb", "Ice Age", "ICE");
  }
}

module.exports = TimeBomb;
