"use strict";
const Constants = require ("../../../Constants");
const DisruptBase = require("../setINV/Disrupt");

class Disrupt extends DisruptBase {
  constructor(game) {
    super(game, "Disrupt", "Weatherlight", "WTH");
  }
}

module.exports = Disrupt;
