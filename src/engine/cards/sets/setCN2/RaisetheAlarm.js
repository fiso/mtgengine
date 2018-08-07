"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaisetheAlarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Raise the Alarm", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = RaisetheAlarm;
