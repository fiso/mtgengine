"use strict";
const Constants = require ("../../../Constants");
const FinestHourBase = require("../setC18/FinestHour");

class FinestHour extends FinestHourBase {
  constructor (game) {
    super(game, "Finest Hour", "Alara Reborn", "ARB");
  }
}

module.exports = FinestHour;
