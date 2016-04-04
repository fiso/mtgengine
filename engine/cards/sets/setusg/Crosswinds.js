"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Crosswinds extends Card {
  constructor(game) {
    super(game, "Crosswinds", "Urza's Saga", "USG");
  }
}

module.exports = Crosswinds;
