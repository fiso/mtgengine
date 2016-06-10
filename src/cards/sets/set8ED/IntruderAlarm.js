"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntruderAlarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Intruder Alarm", "Eighth Edition", "8ED");
  }
}

module.exports = IntruderAlarm;
