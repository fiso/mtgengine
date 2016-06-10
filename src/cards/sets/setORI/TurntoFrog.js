"use strict";
const Constants = require ("../../../Constants");
const TurntoFrogBase = require("../setC14/TurntoFrog");

class TurntoFrog extends TurntoFrogBase {
  constructor (game) {
    super(game, "Turn to Frog", "Magic Origins", "ORI");
  }
}

module.exports = TurntoFrog;
