"use strict";
const Constants = require ("../../../Constants");
const ElvishSkysweeperBase = require("../setCMA/ElvishSkysweeper");

class ElvishSkysweeper extends ElvishSkysweeperBase {
  constructor (game) {
    super(game, "Elvish Skysweeper", "Commander 2013", "C13");
  }
}

module.exports = ElvishSkysweeper;
