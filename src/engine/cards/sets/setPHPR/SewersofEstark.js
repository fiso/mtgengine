"use strict";
const Constants = require ("../../../Constants");
const SewersofEstarkBase = require("../setPRM/SewersofEstark");

class SewersofEstark extends SewersofEstarkBase {
  constructor (game) {
    super(game, "Sewers of Estark", "HarperPrism Book Promos", "PHPR");
  }
}

module.exports = SewersofEstark;
