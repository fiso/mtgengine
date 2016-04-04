"use strict";
const Constants = require ("../../../Constants");
const EchoingTruthBase = require("../setC15/EchoingTruth");

class EchoingTruth extends EchoingTruthBase {
  constructor(game) {
    super(game, "Echoing Truth", "Modern Masters", "MMA");
  }
}

module.exports = EchoingTruth;
