"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setC18/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "2017 Gift Pack", "PGP17");
  }
}

module.exports = Island;
