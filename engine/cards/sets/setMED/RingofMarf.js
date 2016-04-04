"use strict";
const Constants = require ("../../../Constants");
const RingofMarfBase = require("../setARN/RingofMarf");

class RingofMarf extends RingofMarfBase {
  constructor(game) {
    super(game, "Ring of Ma'rûf", "Masters Edition", "MED");
  }
}

module.exports = RingofMarf;
