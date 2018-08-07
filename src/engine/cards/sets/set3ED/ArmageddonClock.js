"use strict";
const Constants = require ("../../../Constants");
const ArmageddonClockBase = require("../setME4/ArmageddonClock");

class ArmageddonClock extends ArmageddonClockBase {
  constructor (game) {
    super(game, "Armageddon Clock", "Revised Edition", "3ED");
  }
}

module.exports = ArmageddonClock;
