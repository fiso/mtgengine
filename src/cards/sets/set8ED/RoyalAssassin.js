"use strict";
const Constants = require ("../../../Constants");
const RoyalAssassinBase = require("../setCED/RoyalAssassin");

class RoyalAssassin extends RoyalAssassinBase {
  constructor (game) {
    super(game, "Royal Assassin", "Eighth Edition", "8ED");
  }
}

module.exports = RoyalAssassin;
