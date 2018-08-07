"use strict";
const Constants = require ("../../../Constants");
const TrialErrorBase = require("../setC16/TrialError");

class TrialError extends TrialErrorBase {
  constructor (game) {
    super(game, "Trial // Error", "Dissension", "DIS");
  }
}

module.exports = TrialError;
