"use strict";
const Constants = require ("../../../Constants");
const SegovianLeviathanBase = require("../set6ED/SegovianLeviathan");

class SegovianLeviathan extends SegovianLeviathanBase {
  constructor(game) {
    super(game, "Segovian Leviathan", "Legends", "LEG");
  }
}

module.exports = SegovianLeviathan;
