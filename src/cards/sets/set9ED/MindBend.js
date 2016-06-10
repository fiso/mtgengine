"use strict";
const Constants = require ("../../../Constants");
const MindBendBase = require("../set8ED/MindBend");

class MindBend extends MindBendBase {
  constructor (game) {
    super(game, "Mind Bend", "Ninth Edition", "9ED");
  }
}

module.exports = MindBend;
