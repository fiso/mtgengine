"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FellwarStoneBase = require("../setC15/FellwarStone.js");

class FellwarStone extends FellwarStoneBase {
  constructor(game) {
    super(game, "Fellwar Stone", "Fifth Edition", "5ED");
  }
}

module.exports = FellwarStone;
