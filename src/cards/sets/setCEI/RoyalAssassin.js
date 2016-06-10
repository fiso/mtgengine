"use strict";
const Constants = require ("../../../Constants");
const RoyalAssassinBase = require("../setCED/RoyalAssassin");

class RoyalAssassin extends RoyalAssassinBase {
  constructor (game) {
    super(game, "Royal Assassin", "International Collector's Edition", "CEI");
  }
}

module.exports = RoyalAssassin;
