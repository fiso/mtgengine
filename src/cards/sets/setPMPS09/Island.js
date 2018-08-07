"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setC18/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "Magic Premiere Shop 2009", "PMPS09");
  }
}

module.exports = Island;
