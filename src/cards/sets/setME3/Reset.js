"use strict";
const Constants = require ("../../../Constants");
const ResetBase = require("../setLEG/Reset");

class Reset extends ResetBase {
  constructor (game) {
    super(game, "Reset", "Masters Edition III", "ME3");
  }
}

module.exports = Reset;
