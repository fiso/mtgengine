"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setARC/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "Commander 2013 Edition", "C13");
  }
}

module.exports = Island;
