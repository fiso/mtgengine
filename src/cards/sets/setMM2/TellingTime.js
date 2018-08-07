"use strict";
const Constants = require ("../../../Constants");
const TellingTimeBase = require("../setC18/TellingTime");

class TellingTime extends TellingTimeBase {
  constructor (game) {
    super(game, "Telling Time", "Modern Masters 2015", "MM2");
  }
}

module.exports = TellingTime;
