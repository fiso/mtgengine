"use strict";
const Constants = require ("../../../Constants");
const TimeEbbBase = require("../setM14/TimeEbb");

class TimeEbb extends TimeEbbBase {
  constructor (game) {
    super(game, "Time Ebb", "Tempest Remastered", "TPR");
  }
}

module.exports = TimeEbb;
