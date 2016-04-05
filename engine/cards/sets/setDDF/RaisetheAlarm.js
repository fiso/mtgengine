"use strict";
const Constants = require ("../../../Constants");
const RaisetheAlarmBase = require("../setDDO/RaisetheAlarm");

class RaisetheAlarm extends RaisetheAlarmBase {
  constructor(game) {
    super(game, "Raise the Alarm", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = RaisetheAlarm;
