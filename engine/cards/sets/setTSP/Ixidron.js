"use strict";
const Constants = require ("../../../Constants");
const IxidronBase = require("../setC14/Ixidron");

class Ixidron extends IxidronBase {
  constructor(game) {
    super(game, "Ixidron", "Time Spiral", "TSP");
  }
}

module.exports = Ixidron;
