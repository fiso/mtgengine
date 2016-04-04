"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VhatiilDalBase = require("../setTMP/VhatiilDal.js");

class VhatiilDal extends VhatiilDalBase {
  constructor(game) {
    super(game, "Vhati il-Dal", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = VhatiilDal;
