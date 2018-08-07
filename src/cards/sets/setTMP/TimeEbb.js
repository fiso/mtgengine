"use strict";
const Constants = require ("../../../Constants");
const TimeEbbBase = require("../setTPR/TimeEbb");

class TimeEbb extends TimeEbbBase {
  constructor (game) {
    super(game, "Time Ebb", "Tempest", "TMP");
  }
}

module.exports = TimeEbb;
