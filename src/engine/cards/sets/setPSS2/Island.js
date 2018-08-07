"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setC18/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "XLN Standard Showdown", "PSS2");
  }
}

module.exports = Island;
