"use strict";
const Constants = require ("../../../Constants");
const ElvishSkysweeperBase = require("../setC13/ElvishSkysweeper");

class ElvishSkysweeper extends ElvishSkysweeperBase {
  constructor(game) {
    super(game, "Elvish Skysweeper", "Commander 2014", "C14");
  }
}

module.exports = ElvishSkysweeper;
