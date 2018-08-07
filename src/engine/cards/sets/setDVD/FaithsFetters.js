"use strict";
const Constants = require ("../../../Constants");
const FaithsFettersBase = require("../setCM2/FaithsFetters");

class FaithsFetters extends FaithsFettersBase {
  constructor (game) {
    super(game, "Faith's Fetters", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = FaithsFetters;
