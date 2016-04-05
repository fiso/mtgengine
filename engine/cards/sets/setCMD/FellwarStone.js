"use strict";
const Constants = require ("../../../Constants");
const FellwarStoneBase = require("../setC15/FellwarStone");

class FellwarStone extends FellwarStoneBase {
  constructor(game) {
    super(game, "Fellwar Stone", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = FellwarStone;
