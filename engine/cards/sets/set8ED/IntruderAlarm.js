"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntruderAlarm extends Card {
  constructor(game) {
    super(game, "Intruder Alarm", "Eighth Edition", "8ED");
  }
}

module.exports = IntruderAlarm;
