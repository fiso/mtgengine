"use strict";
const Constants = require ("../../../Constants");
const ConstructBase = require("../setTC18/Construct");

class Construct extends ConstructBase {
  constructor (game) {
    super(game, "Construct", "Dominaria Tokens", "TDOM");
  }
}

module.exports = Construct;
