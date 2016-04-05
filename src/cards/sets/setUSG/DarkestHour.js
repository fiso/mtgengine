"use strict";
const Constants = require ("../../../Constants");
const DarkestHourBase = require("../set7ED/DarkestHour");

class DarkestHour extends DarkestHourBase {
  constructor(game) {
    super(game, "Darkest Hour", "Urza's Saga", "USG");
  }
}

module.exports = DarkestHour;
