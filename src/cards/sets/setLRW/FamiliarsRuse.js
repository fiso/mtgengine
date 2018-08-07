"use strict";
const Constants = require ("../../../Constants");
const FamiliarsRuseBase = require("../setMM3/FamiliarsRuse");

class FamiliarsRuse extends FamiliarsRuseBase {
  constructor (game) {
    super(game, "Familiar's Ruse", "Lorwyn", "LRW");
  }
}

module.exports = FamiliarsRuse;
