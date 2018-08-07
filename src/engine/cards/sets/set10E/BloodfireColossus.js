"use strict";
const Constants = require ("../../../Constants");
const BloodfireColossusBase = require("../setDDI/BloodfireColossus");

class BloodfireColossus extends BloodfireColossusBase {
  constructor (game) {
    super(game, "Bloodfire Colossus", "Tenth Edition", "10E");
  }
}

module.exports = BloodfireColossus;
