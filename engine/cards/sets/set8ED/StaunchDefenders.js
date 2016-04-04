"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StaunchDefendersBase = require("../set6ED/StaunchDefenders.js");

class StaunchDefenders extends StaunchDefendersBase {
  constructor(game) {
    super(game, "Staunch Defenders", "Eighth Edition", "8ED");
  }
}

module.exports = StaunchDefenders;
