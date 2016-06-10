"use strict";
const Constants = require ("../../../Constants");
const MindBendBase = require("../set8ED/MindBend");

class MindBend extends MindBendBase {
  constructor (game) {
    super(game, "Mind Bend", "Mirage", "MIR");
  }
}

module.exports = MindBend;
