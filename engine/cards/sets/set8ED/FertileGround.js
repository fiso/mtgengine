"use strict";
const Constants = require ("../../../Constants");
const FertileGroundBase = require("../setBRB/FertileGround");

class FertileGround extends FertileGroundBase {
  constructor(game) {
    super(game, "Fertile Ground", "Eighth Edition", "8ED");
  }
}

module.exports = FertileGround;
