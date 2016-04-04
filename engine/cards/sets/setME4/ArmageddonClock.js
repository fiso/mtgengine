"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmageddonClockBase = require("../setATQ/ArmageddonClock.js");

class ArmageddonClock extends ArmageddonClockBase {
  constructor(game) {
    super(game, "Armageddon Clock", "Masters Edition IV", "ME4");
  }
}

module.exports = ArmageddonClock;
