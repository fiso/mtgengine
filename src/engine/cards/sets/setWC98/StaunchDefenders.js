"use strict";
const Constants = require ("../../../Constants");
const StaunchDefendersBase = require("../setTPR/StaunchDefenders");

class StaunchDefenders extends StaunchDefendersBase {
  constructor (game) {
    super(game, "Staunch Defenders", "World Championship Decks 1998", "WC98");
  }
}

module.exports = StaunchDefenders;
