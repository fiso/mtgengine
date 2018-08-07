"use strict";
const Constants = require ("../../../Constants");
const TurntoFrogBase = require("../setORI/TurntoFrog");

class TurntoFrog extends TurntoFrogBase {
  constructor (game) {
    super(game, "Turn to Frog", "Commander 2014", "C14");
  }
}

module.exports = TurntoFrog;
