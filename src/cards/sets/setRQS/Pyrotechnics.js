"use strict";
const Constants = require ("../../../Constants");
const PyrotechnicsBase = require("../setATH/Pyrotechnics");

class Pyrotechnics extends PyrotechnicsBase {
  constructor (game) {
    super(game, "Pyrotechnics", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = Pyrotechnics;
