"use strict";
const Constants = require ("../../../Constants");
const HolyDayBase = require("../set8ED/HolyDay");

class HolyDay extends HolyDayBase {
  constructor(game) {
    super(game, "Holy Day", "Legends", "LEG");
  }
}

module.exports = HolyDay;
