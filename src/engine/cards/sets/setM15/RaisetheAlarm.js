"use strict";
const Constants = require ("../../../Constants");
const RaisetheAlarmBase = require("../setCN2/RaisetheAlarm");

class RaisetheAlarm extends RaisetheAlarmBase {
  constructor (game) {
    super(game, "Raise the Alarm", "Magic 2015", "M15");
  }
}

module.exports = RaisetheAlarm;
