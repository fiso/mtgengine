"use strict";
const Constants = require ("../../../Constants");
const ArmageddonClockBase = require("../setME4/ArmageddonClock");

class ArmageddonClock extends ArmageddonClockBase {
  constructor (game) {
    super(game, "Armageddon Clock", "Antiquities", "ATQ");
  }
}

module.exports = ArmageddonClock;
