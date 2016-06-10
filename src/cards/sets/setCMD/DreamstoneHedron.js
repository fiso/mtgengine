"use strict";
const Constants = require ("../../../Constants");
const DreamstoneHedronBase = require("../setARC/DreamstoneHedron");

class DreamstoneHedron extends DreamstoneHedronBase {
  constructor (game) {
    super(game, "Dreamstone Hedron", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DreamstoneHedron;
