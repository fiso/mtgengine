"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlatantThievery extends Card {
  constructor(game) {
    super(game, "Blatant Thievery", "Commander 2015", "C15");
  }
}

module.exports = BlatantThievery;
