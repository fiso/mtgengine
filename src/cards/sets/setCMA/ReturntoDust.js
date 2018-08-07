"use strict";
const Constants = require ("../../../Constants");
const ReturntoDustBase = require("../setC18/ReturntoDust");

class ReturntoDust extends ReturntoDustBase {
  constructor (game) {
    super(game, "Return to Dust", "Commander Anthology", "CMA");
  }
}

module.exports = ReturntoDust;
