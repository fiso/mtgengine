"use strict";
const Constants = require ("../../../Constants");
const ThallidBase = require("../setFEM/Thallid");

class Thallid extends ThallidBase {
  constructor(game) {
    super(game, "Thallid", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Thallid;
