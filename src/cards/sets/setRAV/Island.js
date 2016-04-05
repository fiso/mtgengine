"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setARC/Island");

class Island extends IslandBase {
  constructor(game) {
    super(game, "Island", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Island;
