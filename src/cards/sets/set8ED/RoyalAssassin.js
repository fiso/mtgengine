"use strict";
const Constants = require ("../../../Constants");
const RoyalAssassinBase = require("../setM12/RoyalAssassin");

class RoyalAssassin extends RoyalAssassinBase {
  constructor (game) {
    super(game, "Royal Assassin", "Eighth Edition", "8ED");
  }
}

module.exports = RoyalAssassin;
