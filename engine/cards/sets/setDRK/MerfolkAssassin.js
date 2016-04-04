"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MerfolkAssassin extends Card {
  constructor(game) {
    super(game, "Merfolk Assassin", "The Dark", "DRK");
  }
}

module.exports = MerfolkAssassin;
