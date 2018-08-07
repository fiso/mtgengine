"use strict";
const Constants = require ("../../../Constants");
const DragonBase = require("../setTC18/Dragon");

class Dragon extends DragonBase {
  constructor (game) {
    super(game, "Dragon", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Dragon;
