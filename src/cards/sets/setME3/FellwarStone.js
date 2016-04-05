"use strict";
const Constants = require ("../../../Constants");
const FellwarStoneBase = require("../setC15/FellwarStone");

class FellwarStone extends FellwarStoneBase {
  constructor(game) {
    super(game, "Fellwar Stone", "Masters Edition III", "ME3");
  }
}

module.exports = FellwarStone;
