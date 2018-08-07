"use strict";
const Constants = require ("../../../Constants");
const FertileGroundBase = require("../setC18/FertileGround");

class FertileGround extends FertileGroundBase {
  constructor (game) {
    super(game, "Fertile Ground", "Eighth Edition", "8ED");
  }
}

module.exports = FertileGround;
