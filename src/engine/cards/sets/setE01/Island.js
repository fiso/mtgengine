"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setC18/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = Island;
