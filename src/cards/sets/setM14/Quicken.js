"use strict";
const Constants = require ("../../../Constants");
const QuickenBase = require("../setGPT/Quicken");

class Quicken extends QuickenBase {
  constructor(game) {
    super(game, "Quicken", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Quicken;
