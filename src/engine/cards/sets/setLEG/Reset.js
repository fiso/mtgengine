"use strict";
const Constants = require ("../../../Constants");
const ResetBase = require("../setME3/Reset");

class Reset extends ResetBase {
  constructor (game) {
    super(game, "Reset", "Legends", "LEG");
  }
}

module.exports = Reset;
