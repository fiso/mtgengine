"use strict";
const Constants = require ("../../../Constants");
const ArmageddonClockBase = require("../setATQ/ArmageddonClock");

class ArmageddonClock extends ArmageddonClockBase {
  constructor (game) {
    super(game, "Armageddon Clock", "Masters Edition IV", "ME4");
  }
}

module.exports = ArmageddonClock;
