"use strict";
const Constants = require ("../../../Constants");
const ChitteringRatsBase = require("../setPHUK/ChitteringRats");

class ChitteringRats extends ChitteringRatsBase {
  constructor (game) {
    super(game, "Chittering Rats", "Darksteel", "DST");
  }
}

module.exports = ChitteringRats;
