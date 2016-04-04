"use strict";
const Constants = require ("../../../Constants");
const TellingTimeBase = require("../setMM2/TellingTime");

class TellingTime extends TellingTimeBase {
  constructor(game) {
    super(game, "Telling Time", "Tenth Edition", "10E");
  }
}

module.exports = TellingTime;
