"use strict";
const Constants = require ("../../../Constants");
const GerrardsWisdomBase = require("../set7ED/GerrardsWisdom");

class GerrardsWisdom extends GerrardsWisdomBase {
  constructor (game) {
    super(game, "Gerrard's Wisdom", "Weatherlight", "WTH");
  }
}

module.exports = GerrardsWisdom;
