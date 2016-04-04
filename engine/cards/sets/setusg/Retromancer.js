"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Retromancer extends Card {
  constructor(game) {
    super(game, "Retromancer", "Urza's Saga", "USG");
  }
}

module.exports = Retromancer;
