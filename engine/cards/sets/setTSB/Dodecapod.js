"use strict";
const Constants = require ("../../../Constants");
const DodecapodBase = require("../setAPC/Dodecapod");

class Dodecapod extends DodecapodBase {
  constructor(game) {
    super(game, "Dodecapod", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Dodecapod;
