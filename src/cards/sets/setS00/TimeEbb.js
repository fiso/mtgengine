"use strict";
const Constants = require ("../../../Constants");
const TimeEbbBase = require("../setM14/TimeEbb");

class TimeEbb extends TimeEbbBase {
  constructor(game) {
    super(game, "Time Ebb", "Starter 2000", "S00");
  }
}

module.exports = TimeEbb;
