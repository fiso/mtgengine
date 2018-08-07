"use strict";
const Constants = require ("../../../Constants");
const KrosanColossusBase = require("../setA25/KrosanColossus");

class KrosanColossus extends KrosanColossusBase {
  constructor (game) {
    super(game, "Krosan Colossus", "Onslaught", "ONS");
  }
}

module.exports = KrosanColossus;
