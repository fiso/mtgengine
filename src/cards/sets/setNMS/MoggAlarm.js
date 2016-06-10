"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggAlarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogg Alarm", "Nemesis", "NMS");
  }
}

module.exports = MoggAlarm;
