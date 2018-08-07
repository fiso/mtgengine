"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggAlarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogg Alarm", "Nemesis", "NEM");
  }
}

module.exports = MoggAlarm;
