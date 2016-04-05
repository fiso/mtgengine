"use strict";
const Constants = require ("../../../Constants");
const TimeBombBase = require("../set5ED/TimeBomb");

class TimeBomb extends TimeBombBase {
  constructor(game) {
    super(game, "Time Bomb", "Masters Edition II", "ME2");
  }
}

module.exports = TimeBomb;
