"use strict";
const Constants = require ("../../../Constants");
const RisingWatersBase = require("../setWC00/RisingWaters");

class RisingWaters extends RisingWatersBase {
  constructor (game) {
    super(game, "Rising Waters", "Nemesis", "NEM");
  }
}

module.exports = RisingWaters;
