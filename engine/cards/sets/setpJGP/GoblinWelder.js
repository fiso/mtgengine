"use strict";
const Constants = require ("../../../Constants");
const GoblinWelderBase = require("../setC14/GoblinWelder");

class GoblinWelder extends GoblinWelderBase {
  constructor(game) {
    super(game, "Goblin Welder", "Judge Gift Program", "pJGP");
  }
}

module.exports = GoblinWelder;
