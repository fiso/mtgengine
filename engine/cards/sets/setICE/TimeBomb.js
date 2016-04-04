"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimeBombBase = require("../set5ED/TimeBomb.js");

class TimeBomb extends TimeBombBase {
  constructor(game) {
    super(game, "Time Bomb", "Ice Age", "ICE");
  }
}

module.exports = TimeBomb;
