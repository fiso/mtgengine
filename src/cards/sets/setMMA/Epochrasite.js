"use strict";
const Constants = require ("../../../Constants");
const EpochrasiteBase = require("../setC14/Epochrasite");

class Epochrasite extends EpochrasiteBase {
  constructor(game) {
    super(game, "Epochrasite", "Modern Masters", "MMA");
  }
}

module.exports = Epochrasite;
