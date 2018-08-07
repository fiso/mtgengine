"use strict";
const Constants = require ("../../../Constants");
const ConstructBase = require("../setTC18/Construct");

class Construct extends ConstructBase {
  constructor (game) {
    super(game, "Construct", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Construct;
