"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MerfolkSpy extends Card {
  constructor(game) {
    super(game, "Merfolk Spy", "Magic 2011", "M11");
  }
}

module.exports = MerfolkSpy;
