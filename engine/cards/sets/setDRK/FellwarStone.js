"use strict";
const Constants = require ("../../../Constants");
const FellwarStoneBase = require("../setC15/FellwarStone");

class FellwarStone extends FellwarStoneBase {
  constructor(game) {
    super(game, "Fellwar Stone", "The Dark", "DRK");
  }
}

module.exports = FellwarStone;
