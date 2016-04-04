"use strict";
const Constants = require ("../../../Constants");
const ThoughtseizeBase = require("../setLRW/Thoughtseize");

class Thoughtseize extends ThoughtseizeBase {
  constructor(game) {
    super(game, "Thoughtseize", "Theros", "THS");
  }
}

module.exports = Thoughtseize;
