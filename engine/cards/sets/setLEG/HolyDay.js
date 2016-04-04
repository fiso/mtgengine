"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HolyDayBase = require("../set8ED/HolyDay.js");

class HolyDay extends HolyDayBase {
  constructor(game) {
    super(game, "Holy Day", "Legends", "LEG");
  }
}

module.exports = HolyDay;
