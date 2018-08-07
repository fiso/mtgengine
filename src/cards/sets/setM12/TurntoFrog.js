"use strict";
const Constants = require ("../../../Constants");
const TurntoFrogBase = require("../setORI/TurntoFrog");

class TurntoFrog extends TurntoFrogBase {
  constructor (game) {
    super(game, "Turn to Frog", "Magic 2012", "M12");
  }
}

module.exports = TurntoFrog;
