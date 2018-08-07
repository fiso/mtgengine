"use strict";
const Constants = require ("../../../Constants");
const DreamstoneHedronBase = require("../setC18/DreamstoneHedron");

class DreamstoneHedron extends DreamstoneHedronBase {
  constructor (game) {
    super(game, "Dreamstone Hedron", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DreamstoneHedron;
