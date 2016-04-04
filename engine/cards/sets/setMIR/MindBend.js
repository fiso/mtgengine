"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindBendBase = require("../set8ED/MindBend.js");

class MindBend extends MindBendBase {
  constructor(game) {
    super(game, "Mind Bend", "Mirage", "MIR");
  }
}

module.exports = MindBend;
