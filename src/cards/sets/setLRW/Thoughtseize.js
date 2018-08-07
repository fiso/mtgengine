"use strict";
const Constants = require ("../../../Constants");
const ThoughtseizeBase = require("../setIMA/Thoughtseize");

class Thoughtseize extends ThoughtseizeBase {
  constructor (game) {
    super(game, "Thoughtseize", "Lorwyn", "LRW");
  }
}

module.exports = Thoughtseize;
