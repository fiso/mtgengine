"use strict";
const Constants = require ("../../../Constants");
const MarkedbyHonorBase = require("../setM15/MarkedbyHonor");

class MarkedbyHonor extends MarkedbyHonorBase {
  constructor (game) {
    super(game, "Marked by Honor", "Welcome Deck 2016", "W16");
  }
}

module.exports = MarkedbyHonor;
