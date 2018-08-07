"use strict";
const Constants = require ("../../../Constants");
const StaunchDefendersBase = require("../setTPR/StaunchDefenders");

class StaunchDefenders extends StaunchDefendersBase {
  constructor (game) {
    super(game, "Staunch Defenders", "Tempest", "TMP");
  }
}

module.exports = StaunchDefenders;
