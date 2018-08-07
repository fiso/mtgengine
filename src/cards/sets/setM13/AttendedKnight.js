"use strict";
const Constants = require ("../../../Constants");
const AttendedKnightBase = require("../setMM3/AttendedKnight");

class AttendedKnight extends AttendedKnightBase {
  constructor (game) {
    super(game, "Attended Knight", "Magic 2013", "M13");
  }
}

module.exports = AttendedKnight;
