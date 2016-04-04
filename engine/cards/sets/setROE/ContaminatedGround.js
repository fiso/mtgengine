"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ContaminatedGroundBase = require("../setGTC/ContaminatedGround.js");

class ContaminatedGround extends ContaminatedGroundBase {
  constructor(game) {
    super(game, "Contaminated Ground", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ContaminatedGround;
