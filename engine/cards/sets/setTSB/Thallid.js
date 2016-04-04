"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThallidBase = require("../setFEM/Thallid.js");

class Thallid extends ThallidBase {
  constructor(game) {
    super(game, "Thallid", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Thallid;
