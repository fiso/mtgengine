"use strict";
const Constants = require ("../../../Constants");
const CennsTacticianBase = require("../setMOR/CennsTactician");

class CennsTactician extends CennsTacticianBase {
  constructor (game) {
    super(game, "Cenn's Tactician", "Magic Online Promos", "PRM");
  }
}

module.exports = CennsTactician;
