"use strict";
const Constants = require ("../../../Constants");
const MobilizationBase = require("../setC14/Mobilization");

class Mobilization extends MobilizationBase {
  constructor(game) {
    super(game, "Mobilization", "Onslaught", "ONS");
  }
}

module.exports = Mobilization;
