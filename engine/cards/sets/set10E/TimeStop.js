"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimeStopBase = require("../setCHK/TimeStop.js");

class TimeStop extends TimeStopBase {
  constructor(game) {
    super(game, "Time Stop", "Tenth Edition", "10E");
  }
}

module.exports = TimeStop;
