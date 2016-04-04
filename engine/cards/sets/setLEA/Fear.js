"use strict";
const Constants = require ("../../../Constants");
const FearBase = require("../set6ED/Fear");

class Fear extends FearBase {
  constructor(game) {
    super(game, "Fear", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Fear;
