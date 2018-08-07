"use strict";
const Constants = require ("../../../Constants");
const ConstructBase = require("../setTC18/Construct");

class Construct extends ConstructBase {
  constructor (game) {
    super(game, "Construct", "Conspiracy: Take the Crown Tokens", "TCN2");
  }
}

module.exports = Construct;
