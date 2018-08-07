"use strict";
const Constants = require ("../../../Constants");
const FaithsFettersBase = require("../setCM2/FaithsFetters");

class FaithsFetters extends FaithsFettersBase {
  constructor (game) {
    super(game, "Faith's Fetters", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = FaithsFetters;
