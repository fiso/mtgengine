"use strict";
const Constants = require ("../../../Constants");
const FaithsFettersBase = require("../setC15/FaithsFetters");

class FaithsFetters extends FaithsFettersBase {
  constructor(game) {
    super(game, "Faith's Fetters", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = FaithsFetters;
