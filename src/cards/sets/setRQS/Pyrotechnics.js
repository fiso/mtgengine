"use strict";
const Constants = require ("../../../Constants");
const PyrotechnicsBase = require("../setFRF/Pyrotechnics");

class Pyrotechnics extends PyrotechnicsBase {
  constructor (game) {
    super(game, "Pyrotechnics", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = Pyrotechnics;
