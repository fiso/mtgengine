"use strict";
const Constants = require ("../../../Constants");
const TellingTimeBase = require("../setC18/TellingTime");

class TellingTime extends TellingTimeBase {
  constructor (game) {
    super(game, "Telling Time", "Tenth Edition", "10E");
  }
}

module.exports = TellingTime;
