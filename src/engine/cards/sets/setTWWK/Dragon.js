"use strict";
const Constants = require ("../../../Constants");
const DragonBase = require("../setTC18/Dragon");

class Dragon extends DragonBase {
  constructor (game) {
    super(game, "Dragon", "Worldwake Tokens", "TWWK");
  }
}

module.exports = Dragon;
