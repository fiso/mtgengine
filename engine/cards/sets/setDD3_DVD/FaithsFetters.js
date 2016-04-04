"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FaithsFettersBase = require("../setC15/FaithsFetters.js");

class FaithsFetters extends FaithsFettersBase {
  constructor(game) {
    super(game, "Faith's Fetters", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = FaithsFetters;
