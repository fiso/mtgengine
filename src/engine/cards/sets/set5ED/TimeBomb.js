"use strict";
const Constants = require ("../../../Constants");
const TimeBombBase = require("../setME2/TimeBomb");

class TimeBomb extends TimeBombBase {
  constructor (game) {
    super(game, "Time Bomb", "Fifth Edition", "5ED");
  }
}

module.exports = TimeBomb;
