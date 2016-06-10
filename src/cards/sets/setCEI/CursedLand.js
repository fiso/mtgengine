"use strict";
const Constants = require ("../../../Constants");
const CursedLandBase = require("../setCED/CursedLand");

class CursedLand extends CursedLandBase {
  constructor (game) {
    super(game, "Cursed Land", "International Collector's Edition", "CEI");
  }
}

module.exports = CursedLand;
