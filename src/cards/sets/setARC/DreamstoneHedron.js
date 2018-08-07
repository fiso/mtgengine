"use strict";
const Constants = require ("../../../Constants");
const DreamstoneHedronBase = require("../setC18/DreamstoneHedron");

class DreamstoneHedron extends DreamstoneHedronBase {
  constructor (game) {
    super(game, "Dreamstone Hedron", "Archenemy", "ARC");
  }
}

module.exports = DreamstoneHedron;
