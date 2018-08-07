"use strict";
const Constants = require ("../../../Constants");
const ConstructBase = require("../setTC18/Construct");

class Construct extends ConstructBase {
  constructor (game) {
    super(game, "Construct", "Worldwake Tokens", "TWWK");
  }
}

module.exports = Construct;
