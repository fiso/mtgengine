"use strict";
const Constants = require ("../../../Constants");
const CennsTacticianBase = require("../setpGTW/CennsTactician");

class CennsTactician extends CennsTacticianBase {
  constructor (game) {
    super(game, "Cenn's Tactician", "Morningtide", "MOR");
  }
}

module.exports = CennsTactician;
