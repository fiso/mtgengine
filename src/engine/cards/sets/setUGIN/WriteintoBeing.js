"use strict";
const Constants = require ("../../../Constants");
const WriteintoBeingBase = require("../setFRF/WriteintoBeing");

class WriteintoBeing extends WriteintoBeingBase {
  constructor (game) {
    super(game, "Write into Being", "Ugin's Fate", "UGIN");
  }
}

module.exports = WriteintoBeing;
