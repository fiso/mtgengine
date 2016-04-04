"use strict";
const Constants = require ("../../../Constants");
const RaisetheAlarmBase = require("../setDDO/RaisetheAlarm");

class RaisetheAlarm extends RaisetheAlarmBase {
  constructor(game) {
    super(game, "Raise the Alarm", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = RaisetheAlarm;
