"use strict";
const Constants = require ("../../../Constants");
const StaunchDefendersBase = require("../set6ED/StaunchDefenders");

class StaunchDefenders extends StaunchDefendersBase {
  constructor(game) {
    super(game, "Staunch Defenders", "Seventh Edition", "7ED");
  }
}

module.exports = StaunchDefenders;
