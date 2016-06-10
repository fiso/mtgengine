"use strict";
const Constants = require ("../../../Constants");
const ContaminatedGroundBase = require("../setGTC/ContaminatedGround");

class ContaminatedGround extends ContaminatedGroundBase {
  constructor (game) {
    super(game, "Contaminated Ground", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ContaminatedGround;
