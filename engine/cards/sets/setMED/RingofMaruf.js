"use strict";
const Constants = require ("../../../Constants");
const RingofMarufBase = require("../setARN/RingofMaruf");

class RingofMaruf extends RingofMarufBase {
  constructor(game) {
    super(game, "Ring of Ma'rûf", "Masters Edition", "MED");
  }
}

module.exports = RingofMaruf;
