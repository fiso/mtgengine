"use strict";
const Constants = require ("../../../Constants");
const FellwarStoneBase = require("../setC15/FellwarStone");

class FellwarStone extends FellwarStoneBase {
  constructor (game) {
    super(game, "Fellwar Stone", "Fourth Edition", "4ED");
  }
}

module.exports = FellwarStone;
