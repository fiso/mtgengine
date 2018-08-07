"use strict";
const Constants = require ("../../../Constants");
const FellwarStoneBase = require("../setCM2/FellwarStone");

class FellwarStone extends FellwarStoneBase {
  constructor (game) {
    super(game, "Fellwar Stone", "Commander 2011", "CMD");
  }
}

module.exports = FellwarStone;
