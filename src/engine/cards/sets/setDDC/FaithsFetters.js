"use strict";
const Constants = require ("../../../Constants");
const FaithsFettersBase = require("../setCM2/FaithsFetters");

class FaithsFetters extends FaithsFettersBase {
  constructor (game) {
    super(game, "Faith's Fetters", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = FaithsFetters;
