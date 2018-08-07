"use strict";
const Constants = require ("../../../Constants");
const TimeStopBase = require("../set10E/TimeStop");

class TimeStop extends TimeStopBase {
  constructor (game) {
    super(game, "Time Stop", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TimeStop;
