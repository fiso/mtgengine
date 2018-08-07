"use strict";
const Constants = require ("../../../Constants");
const InnerFlameIgniterBase = require("../setMM2/InnerFlameIgniter");

class InnerFlameIgniter extends InnerFlameIgniterBase {
  constructor (game) {
    super(game, "Inner-Flame Igniter", "Lorwyn", "LRW");
  }
}

module.exports = InnerFlameIgniter;
