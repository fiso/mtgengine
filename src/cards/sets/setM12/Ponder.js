"use strict";
const Constants = require ("../../../Constants");
const PonderBase = require("../setC18/Ponder");

class Ponder extends PonderBase {
  constructor (game) {
    super(game, "Ponder", "Magic 2012", "M12");
  }
}

module.exports = Ponder;
