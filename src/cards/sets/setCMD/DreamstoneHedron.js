"use strict";
const Constants = require ("../../../Constants");
const DreamstoneHedronBase = require("../setC18/DreamstoneHedron");

class DreamstoneHedron extends DreamstoneHedronBase {
  constructor (game) {
    super(game, "Dreamstone Hedron", "Commander 2011", "CMD");
  }
}

module.exports = DreamstoneHedron;
