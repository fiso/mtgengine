"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishSkysweeperBase = require("../setC13/ElvishSkysweeper.js");

class ElvishSkysweeper extends ElvishSkysweeperBase {
  constructor(game) {
    super(game, "Elvish Skysweeper", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ElvishSkysweeper;
