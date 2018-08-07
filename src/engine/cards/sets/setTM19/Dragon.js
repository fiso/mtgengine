"use strict";
const Constants = require ("../../../Constants");
const DragonBase = require("../setTC18/Dragon");

class Dragon extends DragonBase {
  constructor (game) {
    super(game, "Dragon", "Core Set 2019 Tokens", "TM19");
  }
}

module.exports = Dragon;
