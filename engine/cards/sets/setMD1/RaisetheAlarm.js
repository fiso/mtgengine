"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RaisetheAlarmBase = require("../setDDO/RaisetheAlarm.js");

class RaisetheAlarm extends RaisetheAlarmBase {
  constructor(game) {
    super(game, "Raise the Alarm", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = RaisetheAlarm;
