"use strict";
const Constants = require ("../../../Constants");
const TimeEbbBase = require("../setTPR/TimeEbb");

class TimeEbb extends TimeEbbBase {
  constructor (game) {
    super(game, "Time Ebb", "Magic 2014", "M14");
  }
}

module.exports = TimeEbb;
