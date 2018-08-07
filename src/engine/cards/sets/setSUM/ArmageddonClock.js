"use strict";
const Constants = require ("../../../Constants");
const ArmageddonClockBase = require("../setME4/ArmageddonClock");

class ArmageddonClock extends ArmageddonClockBase {
  constructor (game) {
    super(game, "Armageddon Clock", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = ArmageddonClock;
