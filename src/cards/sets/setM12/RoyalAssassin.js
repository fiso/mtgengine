"use strict";
const Constants = require ("../../../Constants");
const RoyalAssassinBase = require("../setCED/RoyalAssassin");

class RoyalAssassin extends RoyalAssassinBase {
  constructor (game) {
    super(game, "Royal Assassin", "Magic 2012", "M12");
  }
}

module.exports = RoyalAssassin;
