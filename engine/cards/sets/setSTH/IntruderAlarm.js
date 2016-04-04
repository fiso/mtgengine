"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IntruderAlarmBase = require("../set8ED/IntruderAlarm.js");

class IntruderAlarm extends IntruderAlarmBase {
  constructor(game) {
    super(game, "Intruder Alarm", "Stronghold", "STH");
  }
}

module.exports = IntruderAlarm;
