"use strict";
const Constants = require ("../../../Constants");
const ChubToadBase = require("../setMED/ChubToad");

class ChubToad extends ChubToadBase {
  constructor (game) {
    super(game, "Chub Toad", "Ice Age", "ICE");
  }
}

module.exports = ChubToad;
