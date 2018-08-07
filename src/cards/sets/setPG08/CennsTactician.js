"use strict";
const Constants = require ("../../../Constants");
const CennsTacticianBase = require("../setMOR/CennsTactician");

class CennsTactician extends CennsTacticianBase {
  constructor (game) {
    super(game, "Cenn's Tactician", "Gateway 2008", "PG08");
  }
}

module.exports = CennsTactician;
