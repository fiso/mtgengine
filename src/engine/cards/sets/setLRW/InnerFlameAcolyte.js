"use strict";
const Constants = require ("../../../Constants");
const InnerFlameAcolyteBase = require("../setJVC/InnerFlameAcolyte");

class InnerFlameAcolyte extends InnerFlameAcolyteBase {
  constructor (game) {
    super(game, "Inner-Flame Acolyte", "Lorwyn", "LRW");
  }
}

module.exports = InnerFlameAcolyte;
