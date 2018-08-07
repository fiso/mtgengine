"use strict";
const Constants = require ("../../../Constants");
const GoblinWelderBase = require("../setCM2/GoblinWelder");

class GoblinWelder extends GoblinWelderBase {
  constructor (game) {
    super(game, "Goblin Welder", "Judge Gift Cards 2011", "G11");
  }
}

module.exports = GoblinWelder;
