"use strict";
const Constants = require ("../../../Constants");
const CancelBase = require("../setM19/Cancel");

class Cancel extends CancelBase {
  constructor (game) {
    super(game, "Cancel", "Magic Player Rewards 2010", "P10");
  }
}

module.exports = Cancel;
