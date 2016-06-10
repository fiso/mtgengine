"use strict";
const Constants = require ("../../../Constants");
const DreamstoneHedronBase = require("../setARC/DreamstoneHedron");

class DreamstoneHedron extends DreamstoneHedronBase {
  constructor (game) {
    super(game, "Dreamstone Hedron", "Commander 2015", "C15");
  }
}

module.exports = DreamstoneHedron;
