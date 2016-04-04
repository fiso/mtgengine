"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FellwarStoneBase = require("../setC15/FellwarStone.js");

class FellwarStone extends FellwarStoneBase {
  constructor(game) {
    super(game, "Fellwar Stone", "Masters Edition III", "ME3");
  }
}

module.exports = FellwarStone;
