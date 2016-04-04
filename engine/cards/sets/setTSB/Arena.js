"use strict";
const Constants = require ("../../../Constants");
const ArenaBase = require("../setpMEI/Arena");

class Arena extends ArenaBase {
  constructor(game) {
    super(game, "Arena", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Arena;
