"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setC18/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Island;
