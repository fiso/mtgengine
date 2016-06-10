"use strict";
const Constants = require ("../../../Constants");
const FertileGroundBase = require("../setBRB/FertileGround");

class FertileGround extends FertileGroundBase {
  constructor (game) {
    super(game, "Fertile Ground", "Urza's Saga", "USG");
  }
}

module.exports = FertileGround;
