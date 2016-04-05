"use strict";
const Constants = require ("../../../Constants");
const EchoingTruthBase = require("../setC15/EchoingTruth");

class EchoingTruth extends EchoingTruthBase {
  constructor(game) {
    super(game, "Echoing Truth", "Darksteel", "DST");
  }
}

module.exports = EchoingTruth;
