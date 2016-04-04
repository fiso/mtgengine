"use strict";
const Constants = require ("../../../Constants");
const TimeEbbBase = require("../setM14/TimeEbb");

class TimeEbb extends TimeEbbBase {
  constructor(game) {
    super(game, "Time Ebb", "Portal Second Age", "PO2");
  }
}

module.exports = TimeEbb;
