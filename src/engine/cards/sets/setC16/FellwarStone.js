"use strict";
const Constants = require ("../../../Constants");
const FellwarStoneBase = require("../setCM2/FellwarStone");

class FellwarStone extends FellwarStoneBase {
  constructor (game) {
    super(game, "Fellwar Stone", "Commander 2016", "C16");
  }
}

module.exports = FellwarStone;
