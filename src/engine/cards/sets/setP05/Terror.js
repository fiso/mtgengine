"use strict";
const Constants = require ("../../../Constants");
const TerrorBase = require("../setME4/Terror");

class Terror extends TerrorBase {
  constructor (game) {
    super(game, "Terror", "Magic Player Rewards 2005", "P05");
  }
}

module.exports = Terror;
