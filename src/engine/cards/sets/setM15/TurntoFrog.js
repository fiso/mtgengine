"use strict";
const Constants = require ("../../../Constants");
const TurntoFrogBase = require("../setORI/TurntoFrog");

class TurntoFrog extends TurntoFrogBase {
  constructor (game) {
    super(game, "Turn to Frog", "Magic 2015", "M15");
  }
}

module.exports = TurntoFrog;
