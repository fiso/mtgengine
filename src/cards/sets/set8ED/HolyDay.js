"use strict";
const Constants = require ("../../../Constants");
const HolyDayBase = require("../set10E/HolyDay");

class HolyDay extends HolyDayBase {
  constructor (game) {
    super(game, "Holy Day", "Eighth Edition", "8ED");
  }
}

module.exports = HolyDay;
