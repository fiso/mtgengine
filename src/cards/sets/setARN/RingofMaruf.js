"use strict";
const Constants = require ("../../../Constants");
const RingofMarufBase = require("../setMED/RingofMaruf");

class RingofMaruf extends RingofMarufBase {
  constructor (game) {
    super(game, "Ring of Ma'rûf", "Arabian Nights", "ARN");
  }
}

module.exports = RingofMaruf;
