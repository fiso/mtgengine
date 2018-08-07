"use strict";
const Constants = require ("../../../Constants");
const MindBendBase = require("../set10E/MindBend");

class MindBend extends MindBendBase {
  constructor (game) {
    super(game, "Mind Bend", "Eighth Edition", "8ED");
  }
}

module.exports = MindBend;
