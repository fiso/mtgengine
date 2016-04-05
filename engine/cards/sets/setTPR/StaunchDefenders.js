"use strict";
const Constants = require ("../../../Constants");
const StaunchDefendersBase = require("../set6ED/StaunchDefenders");

class StaunchDefenders extends StaunchDefendersBase {
  constructor(game) {
    super(game, "Staunch Defenders", "Tempest Remastered", "TPR");
  }
}

module.exports = StaunchDefenders;
