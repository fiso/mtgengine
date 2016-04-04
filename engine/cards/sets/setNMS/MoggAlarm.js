"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoggAlarm extends Card {
  constructor(game) {
    super(game, "Mogg Alarm", "Nemesis", "NMS");
  }
}

module.exports = MoggAlarm;
