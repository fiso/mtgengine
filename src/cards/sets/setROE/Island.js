"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setARC/Island");

class Island extends IslandBase {
  constructor(game) {
    super(game, "Island", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Island;
