"use strict";
const Constants = require ("../../../Constants");
const SacrificeBase = require("../setCED/Sacrifice");

class Sacrifice extends SacrificeBase {
  constructor(game) {
    super(game, "Sacrifice", "International Collector's Edition", "CEI");
  }
}

module.exports = Sacrifice;
