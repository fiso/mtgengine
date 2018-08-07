"use strict";
const Constants = require ("../../../Constants");
const HorrorBase = require("../setTC18/Horror");

class Horror extends HorrorBase {
  constructor (game) {
    super(game, "Horror", "Gatecrash Tokens", "TGTC");
  }
}

module.exports = Horror;
