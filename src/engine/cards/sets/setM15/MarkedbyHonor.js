"use strict";
const Constants = require ("../../../Constants");
const MarkedbyHonorBase = require("../setW16/MarkedbyHonor");

class MarkedbyHonor extends MarkedbyHonorBase {
  constructor (game) {
    super(game, "Marked by Honor", "Magic 2015", "M15");
  }
}

module.exports = MarkedbyHonor;
