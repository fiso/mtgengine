"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GerrardsWisdomBase = require("../set7ED/GerrardsWisdom.js");

class GerrardsWisdom extends GerrardsWisdomBase {
  constructor(game) {
    super(game, "Gerrard's Wisdom", "Weatherlight", "WTH");
  }
}

module.exports = GerrardsWisdom;
