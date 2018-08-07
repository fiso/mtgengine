"use strict";
const Constants = require ("../../../Constants");
const TimeEbbBase = require("../setTPR/TimeEbb");

class TimeEbb extends TimeEbbBase {
  constructor (game) {
    super(game, "Time Ebb", "Starter 1999", "S99");
  }
}

module.exports = TimeEbb;
