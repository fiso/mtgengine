"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArenaBase = require("../setpMEI/Arena.js");

class Arena extends ArenaBase {
  constructor(game) {
    super(game, "Arena", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Arena;
