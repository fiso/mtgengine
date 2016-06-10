"use strict";
const Constants = require ("../../../Constants");
const ReprisalBase = require("../setALL/Reprisal");

class Reprisal extends ReprisalBase {
  constructor (game) {
    super(game, "Reprisal", "Journey into Nyx", "JOU");
  }
}

module.exports = Reprisal;
