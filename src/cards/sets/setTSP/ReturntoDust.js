"use strict";
const Constants = require ("../../../Constants");
const ReturntoDustBase = require("../setC14/ReturntoDust");

class ReturntoDust extends ReturntoDustBase {
  constructor(game) {
    super(game, "Return to Dust", "Time Spiral", "TSP");
  }
}

module.exports = ReturntoDust;
