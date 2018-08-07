"use strict";
const Constants = require ("../../../Constants");
const PegasusBase = require("../setTC14/Pegasus");

class Pegasus extends PegasusBase {
  constructor (game) {
    super(game, "Pegasus", "Unglued Tokens", "TUGL");
  }
}

module.exports = Pegasus;
