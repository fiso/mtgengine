"use strict";
const Constants = require ("../../../Constants");
const RoyalAssassinBase = require("../setM12/RoyalAssassin");

class RoyalAssassin extends RoyalAssassinBase {
  constructor (game) {
    super(game, "Royal Assassin", "Magic 2011", "M11");
  }
}

module.exports = RoyalAssassin;
