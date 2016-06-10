"use strict";
const Constants = require ("../../../Constants");
const FellwarStoneBase = require("../setC15/FellwarStone");

class FellwarStone extends FellwarStoneBase {
  constructor (game) {
    super(game, "Fellwar Stone", "Fifth Edition", "5ED");
  }
}

module.exports = FellwarStone;
