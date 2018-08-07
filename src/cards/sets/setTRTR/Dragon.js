"use strict";
const Constants = require ("../../../Constants");
const DragonBase = require("../setTC18/Dragon");

class Dragon extends DragonBase {
  constructor (game) {
    super(game, "Dragon", "Return to Ravnica Tokens", "TRTR");
  }
}

module.exports = Dragon;
