"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirkAlarmist extends UnimplementedCard {
  constructor(game) {
    super(game, "Skirk Alarmist", "Legions", "LGN");
  }
}

module.exports = SkirkAlarmist;
