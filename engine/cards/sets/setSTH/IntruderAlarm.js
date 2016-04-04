"use strict";
const Constants = require ("../../../Constants");
const IntruderAlarmBase = require("../set8ED/IntruderAlarm");

class IntruderAlarm extends IntruderAlarmBase {
  constructor(game) {
    super(game, "Intruder Alarm", "Stronghold", "STH");
  }
}

module.exports = IntruderAlarm;
