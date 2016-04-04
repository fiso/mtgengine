"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FertileGroundBase = require("../setBRB/FertileGround.js");

class FertileGround extends FertileGroundBase {
  constructor(game) {
    super(game, "Fertile Ground", "Lorwyn", "LRW");
  }
}

module.exports = FertileGround;
