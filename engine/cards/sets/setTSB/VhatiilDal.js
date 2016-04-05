"use strict";
const Constants = require ("../../../Constants");
const VhatiilDalBase = require("../setTMP/VhatiilDal");

class VhatiilDal extends VhatiilDalBase {
  constructor(game) {
    super(game, "Vhati il-Dal", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = VhatiilDal;
