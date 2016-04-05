"use strict";
const Constants = require ("../../../Constants");
const StoneGiantBase = require("../setCED/StoneGiant");

class StoneGiant extends StoneGiantBase {
  constructor(game) {
    super(game, "Stone Giant", "International Collector's Edition", "CEI");
  }
}

module.exports = StoneGiant;
