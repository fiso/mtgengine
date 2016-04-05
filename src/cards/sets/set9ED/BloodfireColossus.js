"use strict";
const Constants = require ("../../../Constants");
const BloodfireColossusBase = require("../setAPC/BloodfireColossus");

class BloodfireColossus extends BloodfireColossusBase {
  constructor(game) {
    super(game, "Bloodfire Colossus", "Ninth Edition", "9ED");
  }
}

module.exports = BloodfireColossus;
