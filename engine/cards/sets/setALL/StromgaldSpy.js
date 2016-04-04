"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StromgaldSpy extends Card {
  constructor(game) {
    super(game, "Stromgald Spy", "Alliances", "ALL");
  }
}

module.exports = StromgaldSpy;
