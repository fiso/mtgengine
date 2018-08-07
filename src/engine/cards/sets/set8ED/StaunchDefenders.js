"use strict";
const Constants = require ("../../../Constants");
const StaunchDefendersBase = require("../setTPR/StaunchDefenders");

class StaunchDefenders extends StaunchDefendersBase {
  constructor (game) {
    super(game, "Staunch Defenders", "Eighth Edition", "8ED");
  }
}

module.exports = StaunchDefenders;
