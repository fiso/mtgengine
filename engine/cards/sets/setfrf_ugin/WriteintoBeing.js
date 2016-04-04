"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WriteintoBeingBase = require("../setFRF/WriteintoBeing.js");

class WriteintoBeing extends WriteintoBeingBase {
  constructor(game) {
    super(game, "Write into Being", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = WriteintoBeing;
