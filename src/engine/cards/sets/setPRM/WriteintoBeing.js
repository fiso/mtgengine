"use strict";
const Constants = require ("../../../Constants");
const WriteintoBeingBase = require("../setFRF/WriteintoBeing");

class WriteintoBeing extends WriteintoBeingBase {
  constructor (game) {
    super(game, "Write into Being", "Magic Online Promos", "PRM");
  }
}

module.exports = WriteintoBeing;
