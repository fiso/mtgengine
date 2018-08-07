"use strict";
const Constants = require ("../../../Constants");
const UtterEndBase = require("../setC18/UtterEnd");

class UtterEnd extends UtterEndBase {
  constructor (game) {
    super(game, "Utter End", "Magic Online Promos", "PRM");
  }
}

module.exports = UtterEnd;
