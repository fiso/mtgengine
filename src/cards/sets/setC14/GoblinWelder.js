"use strict";
const Constants = require ("../../../Constants");
const GoblinWelderBase = require("../setCM2/GoblinWelder");

class GoblinWelder extends GoblinWelderBase {
  constructor (game) {
    super(game, "Goblin Welder", "Commander 2014", "C14");
  }
}

module.exports = GoblinWelder;
