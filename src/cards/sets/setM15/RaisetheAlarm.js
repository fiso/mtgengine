"use strict";
const Constants = require ("../../../Constants");
const RaisetheAlarmBase = require("../setDDO/RaisetheAlarm");

class RaisetheAlarm extends RaisetheAlarmBase {
  constructor (game) {
    super(game, "Raise the Alarm", "Magic 2015 Core Set", "M15");
  }
}

module.exports = RaisetheAlarm;
