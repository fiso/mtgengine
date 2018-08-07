"use strict";
const Constants = require ("../../../Constants");
const DragonBase = require("../setTC18/Dragon");

class Dragon extends DragonBase {
  constructor (game) {
    super(game, "Dragon", "Commander 2017 Tokens", "TC17");
  }
}

module.exports = Dragon;
